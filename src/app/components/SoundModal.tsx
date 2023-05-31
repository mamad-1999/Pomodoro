"use client"

import useZustandState from "../../../hooks/useZustandState";

export default function Modal() {
    const { isShowModal, closeModal } = useZustandState()
    return (
        <>
            {isShowModal ? (
                <>
                    <div
                        className={`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ${isShowModal && "bg-stone-500/70"}`}
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="md:w-96 w-80 border-0 rounded shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">

                                {/*body*/}
                                <div className="relative p-2 flex justify-center">
                                    <p className="my-2 text-black text-xl leading-relaxed">
                                        Sound Options
                                    </p>
                                </div>
                                <div className="w-full flex justify-center items-center gap-14 py-2">
                                    <div className="flex flex-col justify-center items-center gap-2">
                                        <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-8 h-8"
                                                viewBox="0 0 24 24"
                                                fill="white"
                                            >
                                                <path d="M12 4c-4.879 0-9 4.121-9 9s4.121 9 9 9 9-4.121 9-9-4.121-9-9-9zm0 16c-3.794 0-7-3.206-7-7s3.206-7 7-7 7 3.206 7 7-3.206 7-7 7z"></path>
                                                <path d="M13 8h-2v4H7v2h4v4h2v-4h4v-2h-4zm7.292-1.292l-3.01-3 1.412-1.417 3.01 3zM5.282 2.294L6.7 3.706l-2.99 3-1.417-1.413z"></path>
                                            </svg>
                                        </div>
                                        <span className="text-sm">Alarm</span>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-2">
                                        <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-8 h-8"
                                                viewBox="0 0 24 24"
                                                fill="white"
                                            >
                                                <path d="M20.145 8.27l1.563-1.563-1.414-1.414L18.586 7c-1.05-.63-2.274-1-3.586-1-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7a6.966 6.966 0 00-1.855-4.73zM15 18c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
                                                <path d="M14 10h2v4h-2zm-1-7h4v2h-4zM3 8h4v2H3zm0 8h4v2H3zm-1-4h3.99v2H2z"></path>
                                            </svg>
                                        </div>
                                        <span className="text-sm">Ticking</span>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-center py-4 px-6 rounded-b">
                                    <button
                                        className={`bg-black w-full text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
                                        type="button"
                                        onClick={() => closeModal()}
                                    >
                                        Done
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}