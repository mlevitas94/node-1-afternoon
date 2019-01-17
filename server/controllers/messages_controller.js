messages =[];
id = 0;

module.exports = {
    create: ( req, res ) => {   //grabbing a hold of the request and response object
      const { text, time } = req.body; // deconstructing the info from the request objects's body(the info you will be editing)
      messages.push({ id, text, time }); // pushing that info recived into the messages array to be displayed later while giving it an id as well
      id++; //incrementing id so next push will be unique
      res.status(200).send( messages ); //sending out messages array with newly added push
    },
  
    read: ( req, res ) => {
      res.status(200).send( messages );  //Read is just sending out the current messages array
    },
  
    update: ( req, res ) => {//grabbing a hold of the request and response object
      const { text } = req.body; //decontructing the info from the request object's body(info to be edited)
      const updateID = req.params.id; //grabbing the unique id
      const messageIndex = messages.findIndex( message => message.id == updateID ); // grabbing the index of the requested message based on ID
      let message = messages[ messageIndex ]; //grabbing the message based on found ID
  
      messages[ messageIndex ] = { //pointing to requested message, which we will be updating
        id: message.id, //updating id to what the id originally was
        text: text || message.text, // updating text to req.body text or will put original text in if not
        time: message.time //adding original time as well
      };
  
      res.status(200).send( messages ); //sending out new messages array with updated message
    },
  
    delete: ( req, res ) => { //grabing hold of the request and response object
      const deleteID = req.params.id; //   grabbing the unique id
      messageIndex = messages.findIndex( message => message.id == deleteID );//grabbing the index of the requested messaged based on id
      messages.splice(messageIndex, 1); //removes the message from the requested index location
      res.status(200).send( messages ); // sending out new messages array with updated message
    }
  };