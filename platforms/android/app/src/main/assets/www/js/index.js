/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        var EasyAR_SDK_License_Key="N548QUmUZk3Kg68xtFgnBKnamYXWpdpXggnU4UkSzUTbKt7jEy0z65zLlNdxO824nQoOF8iNepzUHYY9ARBu8Cpv3COVAeWOWA5xTEmYHgHCe1uGUH7EqgYON8CVxqWODPXW9IQfJaK5St2SFUnyyoluGUOdqlP0oPIUyPh5gFEaHffRFpe8ZDasQjG0J91FQs3UAnG9";
        this.receivedEvent('deviceready');
        window.ImageRecognition.init(EasyAR_SDK_License_Key);
        window.ImageRecognition.init(EasyAR_SDK_License_Key,{
            "images":[
            {
                "image": "img/patterns/target4.jpg", //image path in www folder
                "name" : "test" //name that return when this image detected
            },
            {
                "image": "img/patterns/target1.jpg", //image path in www folder
                "name" : "page1" //name that return when this image detected
            },
            {
                "image": "img/patterns/target2.jpg", //image path in www folder
                "name" : "test2" //name that return when this image detected
            },
            {
                "image": "img/patterns/target3.jpg", //image path in www folder
                "name" : "test3" //name that return when this image detected
            },
            {
                "image": "img/patterns/photo.jpg", //image path in www folder
                "name" : "photo" //name that return when this image detected
            }
            ]
        });
        
       },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
 function scan(){
        window.ImageRecognition.start(successCallback, failureCallback);
        function successCallback (res) { alert(res); }
        function failureCallback (err) { alert(err); }
    }