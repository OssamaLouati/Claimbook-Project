
from distutils.log import debug
import pickle
import re
from flask import Blueprint, jsonify, request

import json
from flask import Flask 
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

def recommend2(nom):
    index_of_the_name = data[data.name == nom]['id'].values[0]
     #getting a list of similar persons
    ids = list(data["id"])
    if (data[data.id==index_of_the_name]['roommate'].values[0]==True):
        print("you aleardy have a roommate :)")
    else:
        similarity_score = list(similarity[index_of_the_name])
        #print(similarity_score)
        similarity_score_resultat=[]
        for i in range(len(ids)):
              similarity_score_resultat.append((ids[i], similarity_score[i]))
        
        #print(similarity_score_resultat)
        # sorting the persons based on their similarity score

        sorted_similar_names = sorted(similarity_score_resultat, key = lambda x:x[1], reverse = True) 
        for item in sorted_similar_names:
          if item[1] == 1:
              sorted_similar_names.remove(item)

        #print(sorted_similar_names)
        # print the name of similar persons based on the index
        print('We suggest you the best roommates for you : \n')


        i = 1

        for person in sorted_similar_names:
          index = person[0]
          name_from_index = data[data.id==index]['name'].values[0]
          gender_from_index = data[data.id==index]['gender'].values[0]
          if(data[data.id==index]['roommate'].values[0]==False):
            if (gender_from_index == data[data.id==index_of_the_name]['gender'].values[0]):
              if (i<4):
                print(i, '.',name_from_index , gender_from_index )
                i+=1


def recommend1(nom):
    index = roommate_list1[roommate_list1['name'] == nom].index[0]
    distances = sorted(list(enumerate(similarity1[index])), reverse=True, key=lambda x: x[1])
    recommended_roommates = []
    j=1
    for i in distances[1:]:
        gender_from_index = roommate_list1.iloc[i[0]]['gender']
        if(roommate_list1[roommate_list1.id==index]['roommate'].values[0]==False):
            if (gender_from_index == roommate_list1[roommate_list1.id==index]['gender'].values[0]):
                if (j<4):
                    recommended_roommates.append([roommate_list1.iloc[i[0]]['name'], roommate_list1.iloc[i[0]]['bio'], roommate_list1.iloc[i[0]]['avatar']])
                    j+=1

    return recommended_roommates


roommate_list1 = pickle.load(open('roommate_list1.pkl','rb'))
similarity1 = pickle.load(open('similarity1.pkl','rb'))
roommate_list = roommate_list1['name'].values
@app.route('/recommend/<name>', methods=['GET'])
def recommend(name):
    # Use a machine learning model to generate recommendations based on the input movie name
    recommended = recommend1(name)

    # Return the list of recommended movies in JSON format
    return jsonify({'recommended': recommended})
@app.route('/send_name',  methods=['POST', 'GET'])
def send_anime():
    name_data=''
    if request.method == 'POST':
        name_data = request.get_json()
        print(request.get_json())
  
    return name_data['data']

@app.route('/api')
def index():
    return json.dumps(roommate_list.tolist())

if __name__ == "__main__":
    app.run(debug=True)