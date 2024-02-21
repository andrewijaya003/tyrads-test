import React from 'react';
import './App.css';
import LeftSideBar from './components/SideBar/LeftSideBar';
import { RiArrowUpCircleLine, RiMore2Fill } from 'react-icons/ri';
import BarChart from './components/Chart/BarChart';
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import Item from './components/Item/Item';
import {item, message, transaction, user} from '../model/types'
import Chat from './components/Chat/Chat'
import { SlEmotsmile } from "react-icons/sl";
import { PiPaperclipLight } from "react-icons/pi";
import Transaction from './components/Transaction/Transaction';
import HalfdoughnutChart from './components/Chart/HalfdoughnutChart';
import RightSideBar from './components/SideBar/RightSideBar';

const me: user = {
	id: 1,
	name: "Jhon .D"
}

const items: item[] = [
	{
		id: 1,
		name: 'Macbook',
	},
	{
		id: 2,
		name: 'Motorcycle',
	},
	{
		id: 3,
		name: 'Biycycle',
	},
	{
		id: 1,
		name: 'Iphone 14 pro max',
	},
]

const friend: user = {
	id: 2,
	name: "Esther Howard"
}

const messages: message[] = [
	{
		id: 1,
		message: 'Are you ready?',
		sender: {
			id: 1,
			name: "Jhon .D"
		},
		reciever: {
			id: 2,
			name: "Esther Howard"
		}
	},
	{
		id: 2,
		message: 'I have prepared everthing',
		sender: {
			id: 2,
			name: "Esther Howard"
		},
		reciever: {
			id: 1,
			name: "Jhon .D"
		}
	},
]

const transactions: transaction[] = [
	{
		id: 1,
		user: {
			id: 3,
			name: "Bessie Cooper"
		},
		date: new Date(Date.parse("2023-07-02")),
		price: 3000
	},
	{
		id: 2,
		user: {
			id: 4,
			name: "Guy Hawkins"
		},
		date: new Date(Date.parse("2023-07-02")),
		price: 1970
	},
	{
		id: 3,
		user: {
			id: 5,
			name: "Floyd Miles"
		},
		date: new Date(Date.parse("2023-07-02")),
		price: 5000
	},
	{
		id: 4,
		user: {
			id: 2,
			name: "Esther Howard"
		},
		date: new Date(Date.parse("2023-07-02")),
		price: 2500
	},
]

function App() {
	return (
		<div className="">
			<LeftSideBar/>
			<main className='main'>
				<section className='sec1'>
					<div className='greeting'>
						Hello, {me.name}
					</div>
					<div className='message'>
						View and control your finances here!
					</div>
					<div className='balance-visa'>
						<div className='balance'>
							<div className='detail'>
								<div className='title'>
									Balance statistics
								</div>
								<div className='money'>
									$564
								</div>
								<div className='desc'>
									<img src="./coin.png" alt="coin.png" />
									<div className='text'>
										Your total balance
									</div>
								</div>
								<div className='separator' />
								<div className='minigraph'>
									<img src="./line.png" alt="line.png" />
									<div className='text'>
										<RiArrowUpCircleLine /> 6%
									</div>
								</div>
								<div className='note'>
									Always see your earnings updates
								</div>
							</div>
							<div className='graph'>
								<BarChart />
							</div>
						</div>
						<div className='visa'>
							<img src="./card.png" alt="card.png" />
						</div>
					</div>
				</section>
				<section className='sec2'>
					<div className='item'>
						<div className='title'>
							List of items to buy
						</div>
						<div className='times'>
							<div className='time'>
								<div className='hour'>
									02:00
								</div>
								<div className='date'>
									Sat, August 12
								</div>
							</div>
							<div>
								<MdKeyboardArrowRight className='arrowright' />
							</div>
							<div className='time'>
								<div className='hour'>
									05:00
								</div>
								<div className='date'>
									Sat, September 12
								</div>
							</div>
						</div>
						<div className='shopping'>
							<div className='menu'>
								<div className='title'>
									0/3 <div className='hightlight'>Shopping list</div>
								</div>
								<div className='additem'>
									<FaPlus /> Add an item
								</div>
							</div>
							<div className='items'>
								{
									items.map((i:item) => (
										<Item id={i.id} name={i.name} />
									))
								}
							</div>
						</div>
					</div>
					<div className='chat'>
						<div className='friendname'>
							{friend.name}
						</div>
						<div className='conversation'>
							{
								messages.map((m) => (
									<Chat id={m.id} message={m.message} reciever={m.reciever} sender={m.sender} />
								))
							}
						</div>	
						<div className='sendchat'>
							<textarea className='send' placeholder='Type your message' />
							<div className='options'>
								<div className='menus'>
									<SlEmotsmile className='menu1' />
									<PiPaperclipLight className='menu2' />
								</div>
								<div className='buttonsend'>
									Send now
								</div>
							</div>
						</div>	
					</div>
				</section>
				<section className='sec3'>
					<div className='transaction-analytic'>
						<div className='transaction'>
							<div className='detail'>
								<div className='title'>
									Last transactions
								</div>
								<div className='filters'>
									<div className='newest'>
										Newest
									</div>
									<div className='oldest'>
										Oldest
									</div>
								</div>
							</div>
							<div className='separator' />
							<div className='transactions'>
								{
									transactions.map((t) => (
										<Transaction id={t.id} date={t.date} price={t.price} user={t.user} />
									))
								}
							</div>
						</div>
						<div className='analytic'>
							<div className='detail'>
								<div className='title'>
									Analytics
								</div>
								<div className='more'>
									<RiMore2Fill />
								</div>
							</div>
							<div className='graph'>
								<HalfdoughnutChart />
								<div className='desc'>
									<div className='percentage'>
										90%
									</div>
									<div className='text'>
										Done
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			
			<RightSideBar />
		</div>
	);
}

export default App;
