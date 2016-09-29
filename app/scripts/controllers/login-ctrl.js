'use strict';
/**
 * @ngdoc function
 * @name coinioApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Manages authentication to any active providers.
 */
var errorCode;

angular.module('coinioApp')
  .controller('LoginCtrl', function ($scope, Auth, $location, $q, Ref, $timeout) {

    $scope.oauthLogin = function(provider) {
      $scope.err = null;
      Auth.$signInWithPopup(provider);
    };

    $scope.anonymousLogin = function() {
      $scope.err = null;
      $signInAnonymously();
    };

    $scope.passwordLogin = function(email, pass) {
      $scope.err = null;
      firebase.auth().signInWithEmailAndPassword(email, pass).then(
        function(result) {
          console.log(result.uid);
        })
          .then(
        redirect, showError
      );
    };

    $scope.createAccount = function(email, username, pass, confirm) {
      if(firebase.auth().currentUser) {
        console.log("User already signed in", firebase.auth().currentUser.uid)
      } else {
        // var email = username;
        // var email = $scope.email;
        // alert($scope.username);
        var atpos = email.indexOf("@");
        var dotpos = email.lastIndexOf(".");
        $scope.err = null;
        if( !email ) {
          $scope.err = 'You must provide an email';
        }
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
          $scope.err = 'Email is invalid';
        }
        if( !pass ) {
          $scope.err = 'Please enter a password';
        }
        else if( pass !== confirm ) {
          $scope.err = 'Passwords do not match';
        } 
        else if(pass.length < 6) {
          $scope.err = 'Passwords must be at least 6 characters';
        }
        else {
          firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
            // Handle Errors here.
            errorCode = error.code;
            var errorMessage = error.message;
            console.log("ERROR CODE: " + errorCode + " ERROR MSG: " + errorMessage);
            }).then(function () {
              // authenticate so we have permission to write to Firebase
              return firebase.auth().signInWithEmailAndPassword(email, pass);
            })
            .then(
              function(result) {
                //console.log(result.uid);
                if(!errorCode){
                  storeUserData(result.uid, username, email);
                }
            })
            .then(createProfile)
            .then(redirect, showError);
            
            //console.log("email/pass stored");
        }
      }

      function storeUserData(userId, name, email) {
        firebase.database().ref('users/' + name).set({
          id: userId,
          email: email,
          co1ns: 0,
          co1nspent: 0,
          dailyvisit: false,
          lvl: 0,
          pts: 0,
          joined: firebase.database.ServerValue.TIMESTAMP
        });
      }

      function createProfile(user) {
        var ref = Ref.child('users', user.uid), def = $q.defer();
        ref.set({email: email, name: firstPartOfEmail(email)}, function(err) {
          $timeout(function() {
            if( err ) {
              def.reject(err);
            }
            else {
              def.resolve(ref);
            }
          });
        });

        return def.promise;
      }
    };

    function firstPartOfEmail(email) {
      return ucfirst(email.substr(0, email.indexOf('@'))||'');
    }

    function ucfirst (str) {
      // inspired by: http://kevin.vanzonneveld.net
      str += '';
      var f = str.charAt(0).toUpperCase();
      return f + str.substr(1);
    }

    function redirect() {
      $location.path('/#');
    }

    function showError(err) {
      $scope.err = err;
    }

    function sendEmailVerification() {
      firebase.auth().currentUser.sendEmailVerification().then(function() {
      });
    }

  });
