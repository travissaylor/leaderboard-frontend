import Link from 'next/link';

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active: props.active
        }
        console.log('state',this.state.active);
    }

    render() {
        if(this.state.active == 'Posts'){
            return (
                <div className="controls">
                  <div className="month">June 2019</div>
                  <div className="filters">
                      <p>FILTER BY</p>
                      <div className="switch-container">
                        <Link href="/"><span className="author">Author</span></Link>
                        <Link href="/Posts"><span className="post-toggle active">Post</span></Link>
                      </div>
                  </div>
                </div>
            );
        }
        else {
            return (
                <div className="controls">
                  <div className="month">June 2019</div>
                  <div className="filters">
                      <p>FILTER BY</p>
                      <div className="switch-container">
                        <Link href="/"><span className="author active">Author</span></Link>
                        <Link href="/Posts"><span className="post-toggle">Post</span></Link>
                      </div>
                  </div>
                </div>
            );
        }
    }
}

export default Navbar;