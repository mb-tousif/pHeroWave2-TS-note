# MongoDB Query Operators
<p>MongoDB provides a wide range of query operators that can be used to perform various operations and conditions when querying documents in a collection. These operators allow you to build complex queries and retrieve specific documents based on your criteria. Here are some commonly used MongoDB query operators:</p>

### Comparison Operators:
- <b>$eq </b>: Matches values that are equal to a specified value.
- <b>$ne </b>: Matches values that are not equal to a specified value.
- <b>$gt </b>: Matches values that are greater than a specified value.
- <b>$gte </b>: Matches values that are greater than or equal to a specified value.
- <b>$lt </b>: Matches values that are less than a specified value.
- <b>$lte </b>: Matches values that are less than or equal to a specified value.

### Logical Operators:
- <b>$and </b>: Joins query clauses with a logical AND operation.
- <b>$or </b>: Joins query clauses with a logical OR operation.
- <b>$not </b>: Inverts the effect of a query expression.
- <b>$nor </b>: Joins query clauses with a logical NOR operation.

### Element Operators:
- <b>$exists </b>: Matches documents that contain the specified field.
- <b>$type </b>: Matches documents based on the BSON data type of a field.

### Array Operators:
- <b>$in </b>: Matches any of the values specified in an array.
- <b>$nin </b>: Matches none of the values specified in an array.
- <b>$all </b>: Matches arrays that contain all the specified elements.
- <b>$elemMatch </b>: Matches documents that contain an array field with at least one element matching the specified criteria.

### Regular Expression Operators:
- <b>$regex </b>: Matches documents based on a specified regular expression pattern.
- <b>$options </b>: Allows you to specify options for the $regex operator.

### Aggregation Operators:
- <b>$match </b>: Filters documents based on specified criteria within an aggregation pipeline.
- <b>$group </b>: Groups documents by a specified expression and performs aggregation operations.
- <b>$sort </b>: Sorts documents based on specified criteria.