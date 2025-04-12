# ml/price_model.py

import pandas as pd
from sklearn.linear_model import LinearRegression
import pickle

# Sample training data (grams vs. price)
data = {
    'grams': [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    'price': [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
}

df = pd.DataFrame(data)

# Train the model
model = LinearRegression()
model.fit(df[['grams']], df['price'])

# Save the model
with open('model.pkl', 'wb') as f:
    pickle.dump(model, f)

print("✅ Model trained and saved as model.pkl")
