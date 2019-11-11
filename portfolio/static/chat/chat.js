// adding new chat docs
// setting up a real-time listener


// updating the username
// updating the room

class Chatroom {
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
        this.unsub;
    }

    async addChat(message){
        // format a chat object
        const now = new Date();
        const chat = {
            message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };
        // save chat doc
        const response = await this.chats.add(chat);
        return response;
    }

    getChats(callback){
        this.unsub = this.chats
            .where('room', '==', this.room)
            .orderBy('created_at')
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if(change.type === 'added'){
                        // update ui
                        callback(change.doc.data())
                    }
                });
            });
    }

    updateName(username){
        this.username = username;
        localStorage.setItem('username', username);
    }

    updateRoom(room){
        this.room = room;
        if(this.unsub){
            this.unsub();
        }
    }
}


// setTimeout(() => {
//     chatroom.updateRoom('dad-jokes');
//     chatroom.updateName('joe')
//     chatroom.getChats((data) => {
//         console.log(data);
//     });
//     chatroom.addChat('"I have a split personality," said Tom, being frank.')
// }, 3000);