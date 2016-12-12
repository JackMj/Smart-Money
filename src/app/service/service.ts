import {Injectable} from '@angular/core'
declare var firebase;
 
@Injectable()
export class Service{
  
  public todos()
  {
     var userId = firebase.auth().currentUser.uid;
     return firebase.database().ref('todos/'+userId+'/task').once('value');
  }
  
  public addtask(task)
  {
      firebase.auth().onAuthStateChanged(data =>{
      console.log(data);
      return firebase.database().ref('/todos/'+data.uid+'/task').push(task);    
      })
  }
  profile()
  {
      return firebase.database().ref('todos/user').once('value');
  }
     signWithEmail(email,pass)
    {
       return firebase.auth().signInWithEmailAndPassword(email,pass);
        
    }
    createUser(email,pass)
    {
        return  firebase.auth().createUserWithEmailAndPassword(email,pass).then(snapshot =>
        {
          firebase.database().ref("/smartMoney/"+"users/"+snapshot.uid+"/")
          .set({email:snapshot.email,reference:snapshot.uid}).then(success=>{
             // console.log(success);
          }).catch(e => console.log(e.message));

        })
    }
    signOut()
    {
      return firebase.auth().signOut();
    }
    saveProfile(proObj)
    {
        var userId = firebase.auth().currentUser.uid;
        console.log(userId)
        return firebase.database().ref("/smartMoney/"+"users/"+userId+"/")
        .push(proObj);
    }
  
}
