import PropTypes from 'prop-types';

import css from './Loyout.module.css'
import Header from '../Header/Header';
// import Registration from '../Registration/Registration';
// import LoginPage from '../../pages/LoginPage/LoginPage';

export default function Layout({children}) {
return (
<div className={css.container}>
    <Header/>
    {/* <LoginPage/> */}
    {children}
</div>
)
}
Layout.propTypes = {
    children: PropTypes.node.isRequired,
};