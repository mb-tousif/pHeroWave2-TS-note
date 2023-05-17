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
- <b>$or </b>: Joins query clauses with a logical OR operation.
<p>“$or” অপারেটরটিও MongoDB কুয়েরি অপারেটর। এই অপারেটর দিয়ে মূলত multiple condition এর ভিত্তিতে কুয়েরি করা হয়ে থাকে। তবে “$or” অপারেটর দিয়ে কুয়েরি করার ক্ষেত্রে at least একটা condition-ও যদি সত্য হয় তাহলে সেই criteria এর ভিত্তিতে ডাটা ফিল্টার আউট করে থাকে।</p>

#### এর Basic Syntax টি হলোঃ

```
    Model.find({ $or: [{ condition1 }, { condition2 }, ...] });
```
#### নিচে একটা সিম্পল উদাহরনের মাধ্যমে বিষয়টি আরও ক্লিয়ার করা যাকঃ

```
    const Product = mongoose.model('Product', productSchema);

    Product.find({
      $or: [
        { price: { $lt: 10 } },
        { category: 'electronics' }
      ]
    })
```
<p>উপরের উদাহরনে Product ডাটাবেজ কালেকশন থেকে দুইটা শর্তের ভিত্তিতে কুয়েরি চালানো হয়েছে price এবং category ফিল্ডের ওপর । ১ম শর্ত দেয়া হয়েছে price হবে ১০ টাকা থেকে কম যেহেতু এখানে $lt অপারেটর ব্যবহার করা হয়েছে এবং ২য় শর্ত হিসেবে category ফিল্ডের ভ্যালু হিসেবে দেখা হচ্ছে electronics কিনা। এই দুটো criteria এর মধ্যে যদি একটাও সত্য হয় তাহলে $or অপারেটর সেই ডাটা কুয়েরি করে রিটার্ন করে থাকে। </p>

- <b>$and </b>: Joins query clauses with a logical AND operation.
- <b>$not </b>: Inverts the effect of a query expression.
- <b>$nor </b>: Joins query clauses with a logical NOR operation.

### Element Operators:
- <b>$exists </b>: Matches documents that contain the specified field.
- <b>$type </b>: Matches documents based on the BSON data type of a field.

### Array Operators:
- <b>$in </b>: Matches any of the values specified in an array.
<p>$in অপারেটরটি MongoDB এর একটা কুয়েরি অপারেটর যেটা Mongoose-এও সাপোর্ট করে। $in অপারেটরটি মূলত ব্যবহার করা হয় ডাটাবেজে রাখা ডাটার ওপর কুয়েরি চালিয়ে কোন একটা নির্দিষ্ট ডাটা খুজে বের করার জন্য । এক্ষেত্রে ওই ডাটার particular field's value এর সাথে match করানোর জন্য একটা array এর মধ্যে কিছু ভ্যালু provide করা হয় । ওই Array এর কোন ভ্যালুর সাথে যদি ডাটা এর particular ফিল্ডের ভ্যালু match করে যায় তখন সেই ডাটাটি রিটার্ন করে দেয়।</p>

#### এর Basic Syntax টি হলোঃ

```
    Model.find({ field: { $in: [value1, value2, ...] } });
```
#### নিচে একটা সিম্পল উদাহরনের মাধ্যমে বিষয়টি আরও ক্লিয়ার করা যাকঃ

```
    const Product = mongoose.model('Product', productSchema);

    Product.find({ category: { $in: ['electronics', 'clothing'] } })
```
<p>এখানে Product হলো ডাটাবেজ কালেকশন যেখানে category হচ্ছে একটা particular field . এরপর $in operator দিয়ে কুয়েরি করার জন্য array এর মধ্যে কিছু ভ্যালু দেয়া হয়েছে যা দিয়ে ডাটাবেজের category field এর ভ্যালু এর সাথে match করে দেখেব যে 'electronics' বা 'clothing' catergory এর ডাটা আছে কিনা যদি থাকে তাহলে তা রিটার্ন করে দেবে। $in operator মূলত এভাবে কাজ করে থাকে।</p>

- <b>$nin </b>: Matches none of the values specified in an array.
<p>‘$nin’ operator এর অর্থ হচ্ছে ‘not in’ । এই অপারেটরটি $in অপারেটর-এর ঠিক উল্টো কাজ করে থাকে। অর্থাৎ $nin অপারেটর দিয়ে ডাটাবেজ থেকে ডাটা কুয়েরি করার সময় array তে যে ভ্যালু দেয়া হয় ওই ভ্যালুর সাথে match করে এমন ডাটা বাদে বাকি ডাটাগুলো রিটার্ন করে থাকে।</p>

#### এর Basic Syntax টি হলোঃ

```
  Model.find({ field: { $nin: [value1, value2, ...] } })  
```
#### নিচে একটা সিম্পল উদাহরনের মাধ্যমে বিষয়টি আরও ক্লিয়ার করা যাকঃ

```
   const User = mongoose.model('User', userSchema);

   User.find({ status: { $nin: ['blocked', 'inactive'] } })
```
<p>এখানে ডাটাবেজে User collection এর মধ্যে যে User-দের status “blocked” বা “inactive” ওই ইউজার গুলো বাদে বাকি ইউজার গুলো কুয়েরি করে  রিটার্ন করবে।</p>

- <b>$all </b>: Matches arrays that contain all the specified elements.
- <b>$elemMatch </b>: Matches documents that contain an array field with at least one element matching the specified criteria.

### Regular Expression Operators:
- <b>$regex </b>: Matches documents based on a specified regular expression pattern.
- <b>$options </b>: Allows you to specify options for the $regex operator.

### Aggregation Operators:
- <b>$match </b>: Filters documents based on specified criteria within an aggregation pipeline.
- <b>$group </b>: Groups documents by a specified expression and performs aggregation operations.
- <b>$sort </b>: Sorts documents based on specified criteria.