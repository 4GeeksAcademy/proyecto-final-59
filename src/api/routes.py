"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Vendedor, Producto, Tienda
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

# Handle/serialize errors like a JSON object
@api.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints--------------------------------------------------------------------------------
@api.route('/')
def sitemap():
    return generate_sitemap(api)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

# LOGIN-------------------------------------------------------------------------------------------------------------------
# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    check_vendedor = Vendedor.query.filter_by(email=email).first()
    print(check_vendedor)

    if check_vendedor is None:
        return jsonify({"msg": "Email doesn't exist"}), 404

    if email != check_vendedor.email or password != check_vendedor.password:
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)


@api.route("/signup", methods=["POST"])
def signup():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    
    vendedor_exist = Vendedor.query.filter_by(email=email).first()
    if vendedor_exist is None:
        new_vendedor = Vendedor(
            email=email,
            password=password
        )
        db.session.add(new_vendedor)
        db.session.commit()
        access_token = create_access_token(identity=email)
        return jsonify(access_token=access_token), 200

    else:
        return jsonify({"msg": "Vendedor existe"}), 400
    





























































































































@api.route('/productos', methods=['GET'])
def get_all_productos():

    query_results = Producto.query.all()
    results = list(map(lambda item: item.serialize(), query_results))
   
    if results == []:
        return jsonify({"msg" : "No hay tiendas"}), 404

    response_body = {
        "msg": "Hello, this is your GET /user response ",
        "results": results
    }


    return jsonify(response_body), 200

@api.route('/productos/<int:producto_id>', methods=['GET'])
def get_producto(producto_id):

    producto = Producto.query.get(producto_id)
   
    if producto == None:
        return jsonify({"msg" : "El producto no existe"}), 404

    return jsonify(producto.serialize()), 200

@api.route('/details-producto/<int:tienda_id>/<int:id>', methods=['GET'])
def get_producto_tienda(tienda_id, id):

    check_tienda_producto = Producto.query.filter_by(tienda_id=tienda_id, id=id).first()

    if check_tienda_producto is None:
        return jsonify({"msg" : "No existe este producto"}), 400

    else:
        db.session.get(check_tienda_producto)
        db.session.commit()
        return jsonify(check_tienda_producto.serialize()), 200