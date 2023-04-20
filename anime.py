import requests



class Danbooru:
  def __init__(self, tags):
    response = requests.post("https://febryans-danbooru.hf.space/run/predict", json={
      "data": [
        tags
      ]
    }).json()
    self.data = response["data"][0]
    
  def get_post(self):
    return self.data['large_file_url']