from flask import Flask, render_template, jsonify, request
from threading import Thread
import os

from anime import Danbooru


shiina = Flask(__name__)

@shiina.route("/")
def index():
  return render_template(
    "index.html",
    logo = os.getenv("violet_logo"),
    banner = os.getenv("violet_banner"),
    violet_repo = os.getenv("violet_repo"),
    github = os.getenv("github"),
    twitter = os.getenv("twitter"),
    pixiv = os.getenv("pixiv"),
    repo = os.getenv("app_repo"),
    invite = os.getenv("invite")
  )


@shiina.route("/api/", methods=["POST"])
def danbooru_api():
  tags = request.form['tags']
  url = Danbooru(tags).get_post()
  
  return jsonify({'url': url})
  
  


def run():
  shiina.run(host = "0.0.0.0", port = "8080")

def shiina_go():
  t = Thread(target = run)
  t.start()

shiina_go()