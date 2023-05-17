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
<p>“and" মানে “এবং" , তাই নাম শুনেই বুঝা যাচ্ছে এটার কাজ হবে কোন কিছু জোড়া লাগানো। এটা দারুন কাজের একটা অপারেটর কারণ এই অপারেটর দিয়ে আমরা একাধিক অপারেটর কানেক্ট করে একসাথে কাজে লাগাতে পারি, যার মাধ্যমে আমাদের কুয়েরি গুলো আরো এফিসিয়েন্ট হয়ে ওঠে।</p>
<p>এখন কথা হচ্ছে এই এন্ড অপারেটরের ২ টা রুপ আছে। Implicit আর Explicit। আমরা জানি প্রোগ্রামিং এর ভাষায় তখনই কোন কিছুকে implicit বলা হয় যখন জিনিসটা আপনা আপনি ঘটে, আমাদের কষ্ট করে কিছু বলে দেওয়া লাগেনা। আবার অন্য দিকে আমারা যখন নিজে থেকে কোন কিছু সেট করে দেই বা ডিফাইন করে দেই তখন সেটাকে বলে Explicit কোন ঘটনা। এখানও তাই ঘটছে, আমরা যখন কোন কিছু উল্লেখ না করে একাধিক ফিল্ড একসাথে জুড়ে দিবো তখন মঙ্গোডিবি নিজে থেকেই সেটাকে $and হিসেবে বিবেচনা করবে। আমাদের নিজে থেকে কিছু বলে দিতে হবেনা, আর এটাই হচ্ছে implicit $and।</p>
<p>আবার দেখা যাচ্ছে আমাদের কোন প্রয়োজনে একাধিক অপারেটর ব্যাবহার করার প্রয়োজন পড়ছে, তখন আমরা নিজে থেকে $and লিখে মঙ্গোডিবিকে বলে দিবো যে, "দেখ, আমার এই এই কাজ গুলো একসাথে করে দিতে হবে কিন্তু"। সেটা কিভাবে করে তা আমারা একটু পরে দেখব, তবে তার আগে আমরা implicit and এর একটা উদাহরণ দেখে ফেলি কারণ এটা একদম পুচকা একটা জিনিস।</p>
<p>মনে করেন আমাদের কিছু বই এর ডাট আছে, সেখান থেকে আমারা John Smith এর লিখা Fiction গুলো পেতে চাচ্ছি, সেক্ষেত্রে আমরা নিচের মতো একটা কুয়েরি লিখতে পারি।</p>

```
    db.books.find({
        { category: "Fiction", author: "John Smith" }
    });
```
<p>এখানে দেখা যাচ্ছে আমরা find এর মধ্যে একাধিক ফিল্ড ব্যাবহার করেছি। এই ক্ষেত্রে implicit and ঘটবে, মঙ্গোডিবি আমাদেরকে শুধুমাত্র সেই ডাটা গুলোই ফেরত দিবে যেগুলোর মধ্যে category হলো Fiction "এবং" author হলো John Smith। আমাদের আলাদা ভাবে and উল্লেখ করে দিতে হবেনা।</p>
<p>এখন কথা হচ্ছে যদি আমরা এমন কিছু চাই যে, Fiction পড়ব তবে সেটা John Smith অথবা Jane Doe এর হতে হবে। এই যে অথবা মানেই $or, এই ক্ষেত্রে যেহেতু আমার $and এর সাথে আলাদা একটা অপারেটর এড করতে হবে সে ক্ষেত্রে আমার Explicitly $and বলে দিতে হবে।নিচের কোড লক্ষ্য করি -</p>

```
    db.books.find({
      $and: [
        { category: "Fiction" },
        { $or: [
          { author: "John Smith" },
          { author: "Jane Doe" }
        ]}
      ]
    });
```
<p>এখানে $and অপারেটর লেখা হয়েছে এবং তার মধ্যে $or ব্যাবহার করা হয়েছে, এর মাধ্যমে মনগোডিবি বুঝবে যে “ আমার Fiction খুজে আনতে হবে যার লেখক হবেন John Smith অথবা Jane Doe ” ।</p>
<p>এটাই হচ্ছে মঙ্গোডিবি এর $and অপারেটর এবং Implicit $and আর Explicit $and এর মধ্যে পার্থক্য।</p>

- <b>$not </b>: Inverts the effect of a query expression.
<p>$not অপারেটরটি মঙ্গোডিবিতে একটি স্পেসিফিক শর্তকে falsy বা বিপরীত শর্তে পাল্টে দেওয়ার জন্য ব্যবহৃত হয়। এটি প্রায়শই অন্য কুয়েরি অপারেটরগুলির সঙ্গে সংযোগ করে ব্যবহৃত হয় যাতে নির্দিষ্ট শর্তটির উল্টো অর্থাৎ falsy বা বিপরীত শর্তটি পাওয়া যায়। $not অপারেটরটি একটি সিঙ্গেল কুয়েরি কন্ডিশন রিসিভ করে এবং সেই কন্ডিশনটিকে যে ডেটা গুলো পূরণ করতে পারেনা, সেই ডেটা গুলো কে ফলাফল হিসেবে দেয়।</p>

#### এর Basic Syntax টি হলোঃ

```
   { field: { $not: { <query condition>} } }
```

<p>ধরা যাক, আমাদের ডেটাবেজে একটি বইয়ের কালেকশন আছে এবং আমরা সেখান থেকে সবগুলি বই খুঁজতে চাই যা J.K. Rowling দ্বারা লেখা নয়। আমরা $not অপারেটর ব্যবহার করে এটি সম্ভব করতে পারি নিচের মত করে:</p>

```
    db.books.find({ author: { $not: { $eq: "J.K. Rowling" } } })
```
<p>এই কুয়েরি সমস্ত বইগুলি রিটার্ন করবে যা লেকখ "J.K. Rowling" এর লেখা নয়।</p>

- <b>$nor </b>: Joins query clauses with a logical NOR operation.
<p>$nor অপারেটর আপনাকে একাধিক কন্ডিশনের একটি Array দিয়ে ডেটাবেজে অপারেশন চালানোর সুবিধা দেয়। অর্থাৎ একাধিক কন্ডিশনের একটি Array তে থাকা কন্ডিশনগুলো কে falsy বা বিপরীত শর্তে পাল্টে দেয় এবং যে ডকুমেন্ট গুলো এই কন্ডিশন ম্যাচ করবেনা সেগুলো কে ফলাফল হিসেবে দেখাবে।</p>

#### এর Basic Syntax টি হলোঃ

```
   { $nor: [ { <query condition 1> }, { <query condition 2> }, ... ] }
```

<p>চলুন মনে করি আমাদের একটি পণ্যের কালেকশন আছে এবং আমরা যেসব পণ্যগুলি "ইলেকট্রনিক্স" ক্যাটেগরির অন্তর্ভুক্ত নয় এবং যাদের মূল্য $500 এর বেশি নয় সেগুলোকে কুয়েরি চালিয়ে বের করতে চাই। আমরা $nor অপারেটর ব্যবহার করে এই কাজটি করতে পারি : </p>

```
    db.products.find({
        $nor: [
            { category: "electronics" },
            { price: { $gt: 500 } }
        ]
    })
```
<p>এই কুয়েরি সমস্ত পণ্যগুলি ফলাফল হিসাবে প্রদর্শন করবে যা electronics ক্যাটেগরির অন্তর্ভুক্ত নয় এবং তাদের মূল্য $500 এর বেশি নয়।</p>

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