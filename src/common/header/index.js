import React, { PureComponent } from 'react';
import { useSelector, connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import * as actionCreators from './store/actionCreators';
import * as loginAction from '../../pages/login/store/actionCreators';
import { Link } from 'react-router-dom';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	Addition,
	Button,
	SearchInfo,
	SearchWrapper,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoItem,
	SearchInfoList
} from './style';



// 无状态组建
// const Header = (props) => {
//     return (
//         <HeaderWrapper>
//             <Logo href="/" />
//             <Nav>
//                 <NavItem className="left active">首页</NavItem>
//                 <NavItem className='left'>下载App</NavItem>
//                 <NavItem className='right' >登录</NavItem>
//                 <NavItem className='right' >Aa</NavItem>
//                 <SearchWrapper>
//                     <CSSTransition
//                         in={props.focused}
//                         timeout={200}
//                         classNames="slide"
//                     >
//                         <NavSearch
//                             className={props.focused ? 'foucsed' : ''}
//                             onFocus={props.handleInputFocus}
//                             onBlur={props.handleInputBlur}
//                         ></NavSearch>

//                     </CSSTransition>
//                     { getListArea(props.focused) }
//                 </SearchWrapper>
//             </Nav>
//             <Addition>
//                 <Button className="writting">写文章</Button>
//                 <Button className="reg">注册</Button>
//             </Addition>
//         </HeaderWrapper>
//     )
// }



class Header extends PureComponent {

	// constructor (props) {
	//     super(props);
	//     this.handleInputFocus = this.handleInputFocus.bind(this);
	//     this.handleInputBlur = this.handleInputBlur.bind(this);
	// }

	// componentDidMount() {
	// 	const state = useSelector( state => state );
	// 	console.log(state)
	// }

	render() {

		const { focused, handleInputBlur, handleInputFocus, list, login, logout } = this.props

		return (
			<HeaderWrapper>
				<Link to='/'>
					<Logo />
				</Link>

				<Nav>
					<NavItem className="left active">首页</NavItem>
					<NavItem className='left'>下载App</NavItem>
					{
						login ? <NavItem onClick={logout} className='right' >退出</NavItem> :
							<Link to='/login'><NavItem className='right' >登录</NavItem></Link>
					}

					<NavItem className='right' >Aa</NavItem>
					<SearchWrapper>
						<CSSTransition
							in={focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch
								className={focused ? 'foucsed' : ''}
								onFocus={() => handleInputFocus(list)}
								onBlur={handleInputBlur}
							></NavSearch>

						</CSSTransition>
						{this.getListArea()}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Link to='/write'>
						<Button className="writting">写文章</Button>
					</Link>

					<Button className="reg">注册</Button>
				</Addition>
			</HeaderWrapper>
		)
	}

	getListArea = () => {

		const { focused, list, page, handleMouseEnter, handleMouseLeave, mouseIn, handleChangePage, totalPage } = this.props;
		const jsList = list.toJS()
		const pageList = [];
		if (jsList.length) {
			for (let i = (page - 1) * 10; i < page * 10; i++) {
				pageList.push(
					<SearchInfoItem key={jsList[i]} > {jsList[i]} </SearchInfoItem>
				)
			}
		}

		if (focused || mouseIn) {
			return (
				<SearchInfo
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<SearchInfoTitle>
						热门搜索
                        <SearchInfoSwitch onClick={() => { handleChangePage(page, totalPage) }} >换一批</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{
							pageList
						}
					</SearchInfoList>
				</SearchInfo>
			)
		} else {
			return null;
		}
	}

	// handleInputFocus () {
	//     this.setState({
	//         focused: true
	//     })
	// }

	// handleInputBlur () {
	//      this.setState({
	//          focused: false
	//      })
	// }

}

const mapStateToprops = (state) => {
	// console.log('old',state.header)
	return {
		// focused: state.header.focused
		// focused: state.get('header').get('focused')
		focused: state.getIn(['header', 'focused']),
		list: state.getIn(['header', 'list']),
		page: state.getIn(['header', 'page']),
		mouseIn: state.getIn(['header', 'mouseIn']),
		totalPage: state.getIn(['header', 'totalPage']),
		login: state.getIn(['login', 'login'])
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		handleInputFocus(list) {
			// const action = {
			//     type: 'search_focus'
			// }
			// dispatch(action)
			if (list.size === 0) {
				dispatch(actionCreators.getList())
			}

			dispatch(actionCreators.searchFocus())
		},
		handleInputBlur() {
			// const action = {
			//     type: 'search_blur'
			// }
			// dispatch(action)
			dispatch(actionCreators.searchBlur())
		},
		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter())
		},
		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave())
		},
		handleChangePage(page, totalPage) {
			if (page < totalPage) {
				dispatch(actionCreators.changePage(page + 1))
			} else {
				dispatch(actionCreators.changePage(1))
			}

		},
		logout() {
			dispatch(loginAction.logout())
		}
	}
}

// export default Header;
export default connect(mapStateToprops, mapDispathToProps)(Header)