import React, { useState } from 'react'
import Modal from '../components/Modal'
import Logo from '../resources/img/logo.svg'
import Dollar from '../resources/img/dollar.svg'
import SuspenseRadioBtn from '../resources/img/susp-radio-btn.svg'
import ActiveRadioBtn from '../resources/img/active-radio-btn.svg'
import TerminatedRadioBtn from '../resources/img/terminated-radio-btn.svg'

const dataArray = [
    {
        "id": 1,
        "symbol": "BLA",
        "status": "Active",
        "image": Dollar,
        "amount": "3,412,025.12",
        "createdTimestamp": "08/Sept/2022 16:00",
        "updatedTimestamp": "11/08/2021 18:34",
        "network": "Ropsten",
        "txHash": "324...504",
        "aggregationStrategy": "Simple Average",
        "leasePeriod": 11157754,
        "blockNumber": "xxxxxxxxx",
        "contractAddress": "sa1...wa1"
    },
    {
        "id": 2,
        "symbol": "BLA",
        "status": "Terminated",
        "image": Dollar,
        "amount": "3,412,025.12",
        "createdTimestamp": "08/Sept/2022 16:00",
        "updatedTimestamp": "11/08/2021 18:34",
        "network": "Ropsten",
        "txHash": "324...504",
        "aggregationStrategy": "Simple Average",
        "leasePeriod": 11157754,
        "blockNumber": "xxxxxxxxx",
        "contractAddress": "sa1...wa1"
    },
    {
        "id": 3,
        "symbol": "BLA",
        "status": "Terminated",
        "image": Dollar,
        "amount": "3,412,025.12",
        "createdTimestamp": "08/Sept/2022 16:00",
        "updatedTimestamp": "11/08/2021 18:34",
        "network": "Ropsten",
        "txHash": "324...504",
        "aggregationStrategy": "Simple Average",
        "leasePeriod": 11157754,
        "blockNumber": "xxxxxxxxx",
        "contractAddress": "sa1...wa1"
    },
    {
        "id": 4,
        "symbol": "BLA",
        "status": "Suspended",
        "image": Dollar,
        "amount": "3,412,025.12",
        "createdTimestamp": "08/Sept/2022 16:00",
        "updatedTimestamp": "11/08/2021 18:34",
        "network": "Ropsten",
        "txHash": "324...504",
        "aggregationStrategy": "Simple Average",
        "leasePeriod": 11157754,
        "blockNumber": "xxxxxxxxx",
        "contractAddress": "sa1...wa1"
    },
    {
        "id": 5,
        "symbol": "BLA",
        "status": "Active",
        "image": Dollar,
        "amount": "3,412,025.12",
        "createdTimestamp": "08/Sept/2022 16:00",
        "updatedTimestamp": "11/08/2021 18:34",
        "network": "Ropsten",
        "txHash": "324...504",
        "aggregationStrategy": "Simple Average",
        "leasePeriod": 11157754,
        "blockNumber": "xxxxxxxxx",
        "contractAddress": "sa1...wa1"
    },
    {
        "id": 6,
        "symbol": "BLA",
        "status": "Terminated",
        "image": Dollar,
        "amount": "3,412,025.12",
        "createdTimestamp": "08/Sept/2022 16:00",
        "updatedTimestamp": "11/08/2021 18:34",
        "network": "Ropsten",
        "txHash": "324...504",
        "aggregationStrategy": "Simple Average",
        "leasePeriod": 11157754,
        "blockNumber": "xxxxxxxxx",
        "contractAddress": "sa1...wa1"
    },
    {
        "id": 7,
        "symbol": "BLA",
        "status": "Terminated",
        "image": Dollar,
        "amount": "3,412,025.12",
        "createdTimestamp": "08/Sept/2022 16:00",
        "updatedTimestamp": "11/08/2021 18:34",
        "network": "Ropsten",
        "txHash": "324...504",
        "aggregationStrategy": "Simple Average",
        "leasePeriod": 11157754,
        "blockNumber": "xxxxxxxxx",
        "contractAddress": "sa1...wa1"
    },
    {
        "id": 8,
        "symbol": "BLA",
        "status": "Suspended",
        "image": Dollar,
        "amount": "3,412,025.12",
        "createdTimestamp": "08/Sept/2022 16:00",
        "updatedTimestamp": "11/08/2021 18:34",
        "network": "Ropsten",
        "txHash": "324...504",
        "aggregationStrategy": "Simple Average",
        "leasePeriod": 11157754,
        "blockNumber": "xxxxxxxxx",
        "contractAddress": "sa1...wa1"
    },
]

const Home = () => {

    const [data, setData] = useState(dataArray)
    const [modal, setModal] = useState({
        show: false,
        id: null,
    })

    const openModal = (id) => {
        setModal({
            show: true,
            id,
        });
    }
    const closeModal = () => {
        setModal({
            show: false,
            id: null
        });
    }


    return (
        <div className="home">
            <img src={Logo} alt="oracle logo" className='page-logo' />
            <div className="home-container">
                {
                    data.map(info => {
                        return (
                            <div onClick={() => openModal(info.id)} className='card' key={info.id}>
                                <div className="card-top">
                                    <div className="symbol">
                                        {info.symbol}
                                    </div>
                                    <div className={"status " + info.status}>
                                        {info.status === "Active" ? <img src={ActiveRadioBtn} alt="active status" />
                                            : info.status === "Suspended" ? <img src={SuspenseRadioBtn} alt="suspense status" />
                                            : info.status === "Terminated" ? <img src={TerminatedRadioBtn} alt="terminated status" /> 
                                            : null
                                        } {info.status}
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className='card-body-image'>
                                        <img src={info.image} alt="coin logo" />
                                    </div>
                                    <div className='card-body-content'>
                                        <p className='amount'>${info.amount}</p>
                                        <p className='date-time'>End: {info.createdTimestamp}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            {
                modal.show && (
                    <Modal
                        id={modal.id}
                        data={data}
                        close={closeModal}
                    />
                )
            }
        </div>
    )
}

export default Home;