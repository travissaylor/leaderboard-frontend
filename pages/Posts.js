import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import '../css/app.css';

function Posts(props) {
    return (
        <Layout title="Posts">
            <thead>
                <tr>
                    <th width="50">RANK</th>
                    <th>POST</th>
                    <th>NAME</th>
                    <th width="150"># UNIQUES</th>
                </tr>
            </thead>
            <PostData posts={props.posts}/>
        </Layout>
    );
}

function PostData(props) {
    return (
        <tbody>
            {props.posts.map(post => (
                <tr key={post.id}>
                    <td className="ranking-cell">
                    <div className="ranking">{post.id}</div>
                    </td>
                    <td className="post-cell">
                        <div className="post">{post.title}</div>
                    </td>
                    <td className="name-cell">
                    <div className="name">{post.userId}</div>
                    </td>
                    <td className="unique-cell">
                    <div className="unique-count">###</div>
                    </td>
                </tr>
            ))}
        </tbody>
    );
}

Posts.getInitialProps = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
  
    console.log(`Show data fetched. Count: ${data.length}`);
  
    return {
        posts: data
    };
};

export default Posts;