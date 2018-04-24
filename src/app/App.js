import React, { Component } from 'react';
import styles from'./App.scss';

import asyncComponent from 'Hoc/asyncComponent';
import Header from 'Components/Header/Header';
//import Modal from 'Components/UI/Modal';
//import Sidebar from 'Components/UI/Sidebar';

const AsyncModal = asyncComponent( () => import('Components/UI/Modal') );
const AsyncSidebar = asyncComponent( () => import('Components/UI/Sidebar') );

class App extends Component {
	state = {
		modalized: false,
		sidebarized: false
	};

	toggleModal = evt => {
		evt.preventDefault();
		this.setState(prevState => {
			return {modalized: ! prevState.modalized};
		});
	};

	toggleSidebar = evt => {
		evt.preventDefault();
		this.setState(prevState => {
			return {sidebarized: ! prevState.sidebarized};
		});
	};

	render() {
		const {toggleModal, toggleSidebar} = this;

		return (
			<div className={styles.Container}>
				<header className={styles.Header}>
					<h1 className={styles.Title}>Welcome to Clientz!</h1>
				</header>
				<AsyncModal header="aaaa" footer="bbbb" gravity="sn" show={this.state.modalized} closed={toggleModal} >
					<p> This is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modalThis is modal</p>
				</AsyncModal>
				<Header title='Static title'>
					<a href="" onClick={toggleModal}>Modal</a>
				</Header>
				<p className={styles.Intro}>
					<a href="" onClick={toggleSidebar}>Sidebar</a>
				</p>
				<AsyncSidebar gravity="ev" show={this.state.sidebarized}>
					<p>sidebar</p>
				</AsyncSidebar>
			</div>
			);
		}
	}

	export default App;
