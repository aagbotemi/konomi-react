import React from 'react'
import SuspenseRadioBtn from '../resources/img/susp-radio-btn.svg'
import ActiveRadioBtn from '../resources/img/active-radio-btn.svg'
import TerminatedRadioBtn from '../resources/img/terminated-radio-btn.svg'
import TerminatedCopy from '../resources/img/terminated-copy.svg'
import TxCopy from '../resources/img/txCopy.svg'
import TxPaste from '../resources/img/txPaste.svg'
import MCX from '../resources/img/mcx.svg'
import Gate from '../resources/img/gate.svg'
import Uniswap from '../resources/img/uniswap.svg'
import Coingeco from '../resources/img/coingeko.svg'

const Modal = ({ id, data, close }) => {
    let findData = data.find(item => item.id === id);
    console.log(findData);
    
    return (
        <div className='modal'>
            <div className="modal-container">
                <button className="close-btn" onClick={close}>X</button>
                <div className='modal-top'>
                    <img src={findData.image} alt='logo' /> 
                    <p className="symbol">{findData.symbol}</p>
                    <p className="amount">${findData.amount}</p>
                </div>

                <div className="modal-body">
                    <div className={"status " + findData.status}>
                        {findData.status === "Active" ? <img src={ActiveRadioBtn} alt="active status" />
                            : findData.status === "Suspended" ? <img src={SuspenseRadioBtn} alt="suspense status" />
                            : findData.status === "Terminated" ?
                                <img src={TerminatedRadioBtn} alt="terminated status" />
                            : null
                        } {findData.status} {findData.status === "Terminated" && (<>
                                <p>Payment method failed, not enough balance. </p>
                                <img src={TerminatedCopy} alt="terminated copy" /> 
                            </>)}
                    </div>

                    <div className="second-layer">
                        <div>
                            <p className='title'>Updated Time</p>
                            <p className='title-data'>{findData.updatedTimestamp}</p>
                        </div>
                        <div>
                            <p className='title'>Aggregation Strategy</p>
                            <p className='title-data'>{findData.aggregationStrategy}</p>
                        </div>
                        <div>
                            <p className='title'>Lease Period</p>
                            <p className='title-data'>{findData.leasePeriod}</p>
                        </div>
                        <div>
                            <p className='title'>Block Number till end</p>
                            <p className='title-data'>{findData.blockNumber}</p>
                        </div>
                    </div>

                    <div className="third-layer">
                        <div>
                            <p className='title'>Network</p>
                            <p className='title-data'>{findData.network}</p>
                        </div>
                        <div>
                            <p className='title'>Transaction Hash</p>
                            <div className='title-data'>    {findData.txHash}
                                <img src={TxPaste} alt='tx paste' />
                                <img src={TxCopy} alt='tx copy' />
                            </div>
                        </div>
                        <div>
                            <p className='title'>Client</p>
                            <p className='title-data'>{findData.leasePeriod}</p>
                        </div>
                        <div>
                            <p className='title'>Block Number till end</p>
                            <div className='title-data'>{findData.blockNumber}
                                <img src={TxPaste} alt='tx paste' />
                                <img src={TxCopy} alt='tx copy' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal-footer">
                    <h3>Data Source</h3>

                    <div className="content">
                        <div className="item">
                            <div className="logo">
                                <img src={MCX} alt="mcx" />
                                <p>MCX</p>
                            </div>
                            <p className="amount">$2,330.12</p>
                        </div>
                        <div className="item">
                            <div className="logo">
                                <img src={Gate} alt="gate" />
                                <p>Gate</p>
                            </div>
                            <p className="amount">$2,330.12</p>
                        </div>
                        <div className="item">
                            <div className="logo">
                                <img src={Uniswap} alt="uniswap" />
                                <p>Uniswap</p>
                            </div>
                            <p className="amount">$2,330.12</p>
                        </div>
                        <div className="item">
                            <div className="logo">
                                <img src={Coingeco} alt="coingeco" />
                                <p>Coingeco</p>
                            </div>
                            <p className="amount">$2,330.12</p>
                        </div>
                        <div className="item">
                            <div className="logo">
                                <img src={Uniswap} alt="uniswap" />
                                <p>Uniswap</p>
                            </div>
                            <p className="amount">$2,330.12</p>
                        </div>
                        <div className="item">
                            <div className="logo">
                                <img src={Coingeco} alt="coingeco" />
                                <p>Coingeco</p>
                            </div>
                            <p className="amount">$2,330.12</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Modal;