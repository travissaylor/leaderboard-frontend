import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import { Hash } from 'crypto';

function Index(props) {
    return (
        <Layout title="Authors">
            <thead>
                <tr>
                    <th width="50">RANK</th>
                    <th>NAME</th>
                    <th width="150"># UNIQUES</th>
                </tr>
            </thead>
            <AuthorLink authors={props.authors} />
        </Layout>
    );
}

function AuthorLink(props) {
    return (
        <tbody>
        {props.authors.map(author => (
        <Link as={`/author/${author.id}`} href={{pathname: '/AuthorPosts', query: {authorId: author.id, authorName: author.name}}}>
            <tr key={author.id}>
                <td className="ranking-cell">
                    <div className="ranking">{author.id}</div>
                </td>
                <td className="name-cell">
                    <div className="name">{author.name}</div>
                    <div className="post-count">{author.posts.length}</div>
                </td>
                <td className="unique-cell">
                    <div className="unique-count">###</div>
                </td>
                
            </tr>
        </Link>
        ))}
        </tbody>
    );
};

Index.getInitialProps = async function() {
    const resUsers = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await resUsers.json();

    const resPosts = await fetch('https://jsonplaceholder.typicode.com/posts');
    const dataPosts = await resPosts.json();

    // add posts to the user's info using a one to many relation and hash table: https://stackoverflow.com/a/38653687/3106919
    var hash = Object.create(null);
    var data = dataUsers.map((hash => du => hash[du.id] = { id: du.id, name: du.name, geo: du.geo, posts: []})(hash));
    dataPosts.forEach((hash => dp => hash[dp.userId].posts.push({ id: dp.id, name: dp.title}))(hash));
    
    console.log(`Show data fetched. Count: ${dataUsers.length}`);
  
    return {
        authors: data
    };
};

export default Index;