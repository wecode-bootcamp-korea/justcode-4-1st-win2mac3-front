import { Link } from 'react-router-dom';

const NavDepth2 = () => {
  return (
    <div className="nav-depth2">
      <div className="content-wrap">
        <ol className="nav-depth3">
          <li>
            <Link to="#">best</Link>
          </li>
          <li>
            <Link to="#">new</Link>
          </li>
          <li>
            <Link to="#">데코뷰 스타일링</Link>
          </li>
          <li>
            <Link to="#">매장안내</Link>
          </li>
        </ol>
        <dl className="nav-depth3">
          <dt>
            <Link to="#">침구</Link>
          </dt>
          <dd>
            <Link to="#">차렵이불</Link>
          </dd>
          <dd>
            <Link to="#">이불커버</Link>
          </dd>
        </dl>
      </div>
    </div>
  );
};

export { NavDepth2 };
