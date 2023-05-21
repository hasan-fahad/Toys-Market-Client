import { Link } from "react-router-dom";


const Blogs = () => {
    return (
        <div>
            <h2>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
            <br />
            <p>
            Access token and refresh token shouldn't be stored in the local/session storage, because they are not a place for any sensitive data. Hence I would store the access token in a httpOnly cookie (even though there is CSRF) and I need it for most of my requests to the Resource Server anyway.
            <br />
            I cannot store it in a cookie, because (1) it would be send with every request to my Resource Server as well which makes it vulnerable to CSRF too and (2) it would send expose both access/refresh token with an identical attack vector.
            </p>
            <br />
            <h2>2. Compare SQL and NoSQL databases?</h2>
            <br />
            <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON</p>
            <br />
            <h2>3. What is express js? What is Nest JS?</h2>
            <br />
            <p>Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.
                <br />
                Next.js is a React framework that gives you building blocks to create web applications.
            </p>
            <br />
            <h2>4. What is MongoDB aggregate and how does it work?</h2>
            <br />
            <p> Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
            <br />
        </div>
    );
};

export default Blogs;