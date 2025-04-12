# flask_app.py
from flask import Flask, request, jsonify
import pickle
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load model
with open("model.pkl", "rb") as f:
    model, columns = pickle.load(f)

@app.route("/estimate", methods=["POST"])
def estimate():
    data = request.get_json()
    product = data["product"]
    category = data["category"]

    # Create input in same format as training
    input_df = pd.DataFrame([{"product_" + product: 1, "category_" + category: 1}])
    input_df = input_df.reindex(columns=columns, fill_value=0)

    prediction = model.predict(input_df)[0]
    return jsonify({"estimated_price": round(prediction, 2)})

if __name__ == "__main__":
    app.run(port=5000)
