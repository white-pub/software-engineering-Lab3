# calendar_app/__init__.py
# 2023.11.5
# Originally by Ian Kollipara
# slight debug by Anna Chen

from .router import api
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

# Should not indent
app = FastAPI()

# Mount pages and javaScript files
# page 			location
# index.html 	http://127.0.0.1:8000
# 				http://127.0.0.1:8000/index.html
# today.html 	http://127.0.0.1:8000/today.htmld4
app.mount("/static", StaticFiles(directory="static"), name="static")
app.mount("/api", api)
app.mount("/", StaticFiles(directory="pages", html=True), name="pages")


