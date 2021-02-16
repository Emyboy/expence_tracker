import Btn from '../components/Btn/Btn';
import Eachexpense from '../components/EachItem/EachItem'
import AddBtn from '../components/AddBtn/AddBtn'
import { ScrollPanel } from 'primereact/scrollpanel';

export default function Index({ stars }) {
	return (
		<div className={'container'}>
			<div className={'row'}>
				<div className={'col-sm-5 p-0'}>
					<div className={'card m-1'}>
						<div className={'card-body'}>
							<div className={'text-center mb-5'}>
								<h1><b>Expence - Tracker</b></h1>
							</div>
							<h5>Your Balance</h5>
							<h1><b>₦140000.00</b></h1> <span>from ₦200000.00</span>
						</div>
					</div>
				</div>
				<div className={'col-sm-7 p-0'}>
					<div className={'card m-1'}>
						<div className={'card-body'}>
							<h2>History</h2>
							<hr />
							<ScrollPanel style={{ width: '100%', height: '40vh' }}>
								<Eachexpense />
								<Eachexpense />
								<Eachexpense />
								<Eachexpense />
								<Eachexpense />
								<Eachexpense />
								<Eachexpense />
								<Eachexpense />
							</ScrollPanel>
						</div>
					</div>
				</div>
			</div>
			<AddBtn />
		</div>
	)
}

export async function getServerSideProps() {
	return {
		props: {
			stars: []
		},
	}
}
