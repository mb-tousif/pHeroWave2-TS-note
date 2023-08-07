CREATE TABLE Mobiles (
    MobileID SERIAL PRIMARY KEY,
    MobileName varchar(255) NOT NULL,
    MobilePrice int NOT NULL,
    MobileQuantity int NOT NULL
);

DROP TABLE IF EXISTS Mobiles;
INSERT INTO Mobiles (MobileName, MobilePrice, MobileQuantity)VALUES ('Samsung Galaxy S10', 1000, 10),('Samsung Galaxy S10+', 1200, 10),('Samsung Galaxy S10e', 900, 10),('Samsung Galaxy S9', 800, 10),('Samsung Galaxy S9+', 900, 10),('Samsung Galaxy S8', 700, 10),('Samsung Galaxy S8+', 800, 10),('Samsung Galaxy S7', 600, 10),('Samsung Galaxy S7 Edge', 700, 10);

SELECT mobilename, mobileprice * mobilequantity AS total FROM mobiles;
