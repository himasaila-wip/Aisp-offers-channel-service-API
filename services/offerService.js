var axios = require("axios");
var data = require("../response.json");

// const wholeResponse = async (req, res) => {
//   const id = req.params["AccountId"];
//   const params = new URLSearchParams({
//     AccountId: id,
//     OfferType: "BT",
//   }).toString();
//   const api = "http://localhost:3000/offers?" + params;
//   axios
//     .get(api)
//     .then((resp) => {
//       try {
//         const ob = resp.data[0];
//         data.Data.Offer.map((i) => {
//             (i.AccountId = id),
//             (i.OfferId = ob.OfferId),
//             (i.OfferType = ob.Type),
//             (i.Description = ob.Description),
//             (i.StartDateTime = ob.StartDate),
//             (i.EndDateTime = ob.ExpiryDate),
//             (i.Rate = ob.InterestRate);
//         });
//         res.json(data)
        
//       } catch (err) {
//         res.status(404).send({
//             "Code": "string",
//             "Id": id,
//             "Message": "Error Occured",
//             "Errors": [
//               {
//                 "ErrorCode": "404",
//                 "Message": resp.data.error.errorMessage,
//                 "Path": api,
//                 "Url": resp.data.error.stack
//               }
//             ]
//           })
//         };
//       })
//     .catch((error) => {
//       res.status(500).send({
//         "Code": "string",
//         "Id": id,
//         "Message": "Request Failed due to internal server error",
//         "Errors": [
//           {
//             "ErrorCode": "500",
//             "Path": api,
//             "Url": error.stack
//           }
//         ]
//       });
//     });
// };

//module.exports = wholeResponse() ;

const wholeResponse =async (req,res) =>{
  try{
        const id =  req.params["AccountId"];
        const params =  new URLSearchParams({
          AccountId: id,
          OfferType: "BT",
        }).toString();
        const api = "http://localhost:3000/offers?"+params;
        const resp = await axios.get(api);
        return resp;
      }catch(err){
        console.error(err);
      }

}
 module.exports = wholeResponse;
