SELECT * from mobiles WHERE mobileprice BETWEEN 1000 AND 2000;
-- Every condition after WHERE is case SENSITIVE
SELECT * from mobiles WHERE mobileprice BETWEEN 1000 AND 2000 AND mobilename LIKE '%g%';
SELECT * from mobiles WHERE mobileprice BETWEEN 1000 AND 2000 AND mobilename LIKE '%samsung%';
SELECT * from mobiles WHERE mobilename LIKE '%samsung%'; -- % means any number of characters
SELECT * from mobiles WHERE mobilename LIKE '%s%'; -- % means any number of characters
SELECT * from mobiles WHERE mobilename LIKE 'S%'; -- S% means S at the start
SELECT * from mobiles WHERE mobilename LIKE '%e'; -- %e means e at the end
SELECT * from mobiles WHERE mobilename LIKE 'S%e'; -- S%e means S at the start and e at the end
SELECT * from mobiles WHERE mobilename LIKE '__m%'; -- 2 underscore means 2 character skip
