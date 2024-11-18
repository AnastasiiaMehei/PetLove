import PropTypes from 'prop-types';

import css from './Loyout.module.css'
import Header from '../Header/Header';

export default function Layout({children}) {
return (
<div className={css.container}>
    <Header/>
    {children}
</div>
)
}
Layout.propTypes = {
    children: PropTypes.node.isRequired,
};