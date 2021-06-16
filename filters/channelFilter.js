const service = require("../services/offerService");
const circuitBreaker = require("../circuitBreaker/circuitBreaker");
var data = require("../response.json");
const wholeresFilter = (req, res) => {
  const breaker = new circuitBreaker(service(req, res));
  console.log("breaker", service);
  breaker
    .fire()
    .then((resp) => {
      let dt = resp.data;
      const id = req.params["AccountId"]
      try {
                const ob = dt[0];
                data.Data.Offer.map((i) => {
                    (i.AccountId = id),
                    (i.OfferId = ob.OfferId),
                    (i.OfferType = ob.Type),
                    (i.Description = ob.Description),
                    (i.StartDateTime = ob.StartDate),
                    (i.EndDateTime = ob.ExpiryDate),
                    (i.Rate = ob.InterestRate);
                });
                res.json(data)
                
              } catch (err) {
                res.status(404).send({
                    "Code": "string",
                    "Id": id,
                    "Message": "Error Occured",
                    "Errors": [
                      {
                        "ErrorCode": "404",
                        "Message": resp.data.error.errorMessage,
                        "Url": resp.data.error.stack
                      }
                    ]
                  })
                };
      res.json(data);
    })
};

module.exports = { wholeresFilter };
