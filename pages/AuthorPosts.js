import Layout from '../components/Layout';
import { withRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

const AuthorPost = (props) => (
        <Layout title="Author's Posts">
            <thead>
                <tr>
                    <th width="50">RANK</th>
                    <th>NAME</th>
                    <th width="150"># UNIQUES</th>
                </tr>
            </thead>
            <Content posts={props.posts} />
        </Layout>
);

const Content = withRouter( props  => {
    return(
        <tbody>
            {props.posts.map(post => {
                if(post.userId == props.router.query.authorId) {
                    return (
                        <tr key={post.id}>
                            <td className="ranking-cell">
                            <div className="ranking">{post.id}</div>
                            </td>
                            <td className="post-cell">
                            <div className="name">{post.title}</div>
                            </td>
                            <td className="unique-cell">
                            <div className="unique-count">###</div>
                            </td>
                        </tr>
                    );
                }
            })}
        </tbody>
    )
});

AuthorPost.getInitialProps = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
  
    console.log(`Show data fetched. Count: ${data.length}`);

  
    return {
        posts: data,
    };
};

export default AuthorPost;