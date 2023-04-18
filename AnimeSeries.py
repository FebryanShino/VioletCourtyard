import requests


class Danbooru:
  def __init__(self, tags):
    response = requests.post("https://febryans-danbooru.hf.space/run/predict", json={
      "data": [
        "kamisato_ayaka",
      ]
    }).json()
    self.data = response["data"][0]

  def get_post(self):
    return self.data



class Yandere:
  def __init__(
    self,
    popular: bool,
    tags,
    limit=None
  ):
    self.tags = tags
    response = requests.post("https://febryans-wakaranai.hf.space/run/predict", json={
      "data": [
        popular,
        self.tags,
        limit
      ]
    }).json()
    self.data = response["data"][0]

  def get_post(self, limit):
    posts = []
    counter = 0
    while counter < limit:
      post = random.choice(self.data['posts'])
      if post not in posts:
        posts.append(post)
        counter += 1
      if len(posts) == len(self.data['posts'])+1:
        break
    return posts

  def get_raw(self):
    return self.data