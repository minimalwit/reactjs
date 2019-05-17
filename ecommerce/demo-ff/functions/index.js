const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const nodemailer = require ('nodemailer')
const emailAccount = require ('./email.json')

const mailTransport = nodemailer.createTransport({
	service: 'gmail',
	auth:{
		user : emailAccount.email,
		pass : emailAccount.Password
	}
})

export.moltinPayment = functions.https.onRequest((request,response) => {
	const email = 'value@email '
	const orderID = ' '
	const mailOptions ={
		to: minimalwit@gmail.com,
		bcc: 'bcc@gmail.com',
		from: 'no_reply@oem.com',
		subject: 'confirm Order No. ${orderId} ',
		//html: ejs.render(orderCustomerConfirm, { value})
		text: 'Devincube store recieve your order ${orderId} now. \n Thank you for Shopping'
		
	};
	
	mailTransport.sendMail(mailOptions)
	//response.send(request.body)
	response.send({success : true});
}));


