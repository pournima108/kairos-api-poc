// var fs = require('fs');
// var request = require('request');
// var express=require('express')
// var app=express()
// var port = process.env.PORT || 3000;

// // app.get('/getapi',function(req,res){
// //     var result
// //     request.post({
// //         url: 'http://api.kairos.com/detect',
// //         headers: {
// //             'app_id': '357c8492',
// //             'app_key':'b10f52eb2244dc90ae5f9ba98246ac25'
// //         },
// //         formData: {
// //             'image':fs.createReadStream('./Abhishek.jpg'),
// //         }
// //       }, function callback(err, httpResponse, body) {
// //         if (err) {
// //             console.error('request failed:', err);
// //             return;
// //         }
// //         var response = JSON.parse(body);
       
// //         res.send(response);
// //       });
   
// // })
// console.log("outside block")

// app.post('/app',function(req,res){
//     console.log("inside block")
//     request.post({
//         url:{
//         'url':'https://api.kairos.com/enroll',
//         'subject_id':'Abhishek',
//         'gallery_name':'Employee database'
//     },
//         headers: {
//             'app_id': '357c8492',
//             'app_key':'b10f52eb2244dc90ae5f9ba98246ac25'
//         },
//         body: {
//             'image':fs.createReadStream('./Abhishek.jpg'),
//             'subject_id':'Abhishek',
//             'gallery_name':'Employee database'
//         }
//       }, function callback(err, httpResponse, body) {
//         if (err) {
//             console.error('request failed:', err);
//             return;
//         }
//         var response = JSON.parse(body);
//         console.log(body)
       
//         res.send(response);
//       });
// })

// app.listen(port);
// console.log("Server Running Successfully at port " + port);


var request = require('request');
var fs = require('fs');

// request({
//   method: 'POST',
//   url: 'https://api.kairos.com/enroll',
//   headers: {
//     'Content-Type': 'application/json',
//     'app_id': '357c8492',
//     'app_key': 'b10f52eb2244dc90ae5f9ba98246ac25'
//   },
//   body:  {
//             "image":"https://lh3.googleusercontent.com/-bb8cjy_Qph0/AAAAAAAAAAI/AAAAAAAAAC4/tlFJkMeg7DU/photo.jpg",
//             "subject_id": "Abhishek",  
//             "gallery_name": "MyGallery"
//           },
//           // {
//           //   "image":"https://github.com/pournima108/images/blob/master/Bikram.jpg",
//           //   "subject_id": "Bikram",  
//           //   "gallery_name": "MyGallery"
//           // },
//           // {
//           //   "image":"https://github.com/pournima108/images/blob/master/Lokesh.jpg",
//           //   "subject_id": "Lokesh",  
//           //   "gallery_name": "MyGallery"
//           // },
//           // {
//           //   "image":"https://github.com/pournima108/images/blob/master/Lokesh.jpg",
//           //   "subject_id": "Lokesh",  
//           //   "gallery_name": "MyGallery"
//           // },
//           // {
//           //   "image":"https://github.com/pournima108/images/blob/master/img155.jpg",
//           //   "subject_id": "Pournima",  
//           //   "gallery_name": "MyGallery"
          
//           // }
          
//   json: true,
// }, function (error, response, body) {
//   //console.log(response)

//   console.log('Status:', response.statusCode);
//   console.log('Headers:', JSON.stringify(response.headers));
//   console.log('Response:', body);
// });



var request = require('request');

request({
  method: 'POST',
  url: 'https://api.kairos.com/recognize',
  headers: {
    'Content-Type': 'application/json',
    'app_id': '357c8492',
    'app_key': 'b10f52eb2244dc90ae5f9ba98246ac25'
  },
  body: "{  \"image\": \"https://lh3.googleusercontent.com/-bb8cjy_Qph0/AAAAAAAAAAI/AAAAAAAAAC4/tlFJkMeg7DU/photo.jpg\",  \"gallery_name\": \"MyGallery\"}"
}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});