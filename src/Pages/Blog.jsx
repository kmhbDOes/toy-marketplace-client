import React from "react";

const Blog = () => {
  return (
    <div>
      <p>
        <span className="font-bold">
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </span>
        <br />
        <span>
          Access Token: It is a short-lived credential used for authorization
          and authentication to access protected resources. Refresh Token: It is
          a long-lived credential used to obtain a new access token after the
          previous one expires. They work by issuing and validating tokens for
          secure access to resources without requiring repeated authentication.
          Access tokens can be stored in secure HTTP-only cookies or browser
          local storage, while refresh tokens should be stored securely,
          preferably in an HTTP-only cookie or another secure storage mechanism.
        </span>
      </p>
      <p>
        <span className="font-bold"> 2.Compare SQL and NoSQL databases?</span>{" "}
        <br />
        <span>
          SQL (Structured Query Language) and NoSQL (Not Only SQL) databases are
          two different types of database management systems with distinct
          characteristics: SQL Databases: Structure: SQL databases have a
          predefined schema with structured tables, columns, and relationships.
          Data Model: SQL databases follow a relational data model based on
          tables, rows, and columns. Query Language: SQL is used to query and
          manipulate data using standardized SQL statements. ACID Compliance:
          SQL databases generally provide ACID (Atomicity, Consistency,
          Isolation, Durability) properties, ensuring data integrity. Scaling:
          SQL databases are vertically scalable, meaning they scale by
          increasing the hardware resources of a single server. Data Integrity:
          SQL databases enforce data integrity through constraints, such as
          primary keys, foreign keys, and data types. Examples: MySQL,
          PostgreSQL, Oracle, SQL Server. NoSQL Databases: Structure: NoSQL
          databases are schema-less or have a flexible schema, allowing dynamic
          and unstructured data. Data Model: NoSQL databases support various
          data models, including key-value, document, columnar, and graph. Query
          Language: NoSQL databases use different query languages depending on
          the specific database type and data model. Scalability: NoSQL
          databases are horizontally scalable, allowing them to distribute data
          across multiple servers. Flexible Data Types: NoSQL databases can
          handle a wide variety of data types and formats without predefined
          schemas. Performance: NoSQL databases excel at handling large volumes
          of data and high-speed read and write operations. Examples: MongoDB,
          Cassandra, Redis, CouchDB.
        </span>
      </p>
      <p>
        <span className="font-bold">
          3. What is express js? What is Nest JS ?
        </span>{" "}
        <br />
        <span>
          Express.js is a popular web application framework for Node.js. It
          provides a simple and flexible way to build web applications and APIs.
          Express.js allows developers to handle routes, manage requests and
          responses, handle middleware, and implement various features required
          for web development. It is known for its minimalistic and
          unopinionated design, providing developers with the freedom to
          structure their applications as needed. Express.js has a vast
          ecosystem of middleware and plugins, making it highly extensible and
          adaptable to different use cases.
        </span>
      </p>
      <p>
        <span className="font-bold">
          4. What is MongoDB aggregate and how does it work ?
        </span>
        <br />
        <span>
          analysis operations on the data stored in a collection. It allows you
          to perform various transformations, calculations, and aggregations on
          the documents within a collection. The aggregate function takes an
          array of stages as its argument. Each stage represents a specific
          operation or transformation to be applied to the documents in the
          collection. The stages are executed in the order they are specified,
          and the output of one stage is passed as input to the next stage.
        </span>
      </p>
    </div>
  );
};

export default Blog;
