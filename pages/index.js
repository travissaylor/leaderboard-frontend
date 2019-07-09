import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

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
                    <div className="post-count">### posts</div>
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
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    console.log(`Show data fetched. Count: ${data.length}`);
  
    return {
        authors: data
    };
};

export default Index;