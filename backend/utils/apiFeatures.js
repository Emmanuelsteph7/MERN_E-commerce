// this is just a class for searching, filtering the database.
// it can be reused
class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  search() {
    // To use $regex, use one of the following syntaxes:
    // { <field>: { $regex: /pattern/, $options: '<options>' } }
    // { <field>: { $regex: 'pattern', $options: '<options>' } }
    // { <field>: { $regex: /pattern/<options> } }
    const keyword = this.queryString.keyword
      ? {
          // this will search the name field in our product database collection
          name: {
            $regex: this.queryString.keyword,
            $options: "i", // i means case-insensitive
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    // a spread operator is used so that i can manipulate the objects in the queryString
    const copyQuery = { ...this.queryString };

    // this is to remove the keyword, limit and page fields from the queryString
    const removeFields = ["keyword", "limit", "page"];
    // The delete operator removes a given property from an object. On successful deletion, it will return true, else false will be returned.
    removeFields.forEach((field) => delete copyQuery[field]);

    let queryStr = JSON.stringify(copyQuery);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`); // gt, gte, lt, lte => greater than, greater than or equal to, less than, less than or equal to

    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }

  pagination(resultPerPage) {
    const currentPage = Number(this.queryString.page) || 1;
    const skip = resultPerPage * (currentPage - 1);

    this.query = this.query.limit(resultPerPage).skip(skip);
    return this;
  }
}

module.exports = APIFeatures;
