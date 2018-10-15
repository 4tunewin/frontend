export const failedHistoryItem = {
    id: '10',
    bet: {
        gambler: '0x3397cdef1501b1da81e00eb9685e75b5e7dce231',
        amount: '50000000000000000',
        mask: 1,
        modulo: 6,
        blockHash:
            '0xfe24886d851639194f086a67963502c34555e41599632aa7ca7e1d8626fce0fa',
    },
    reveal: {
        reveal:
            '0xc900d0167c8275f1a029f472fa658db90dffea80296454f7887c17dd395a965e',
    },
    payment: '0',
    jackpotPayment: null,
};

export const winHistoryItem = {
    id: '12',
    bet: {
        gambler: '0x3397cdef1501b1da81e00eb9685e75b5e7dce231',
        amount: '100000000000000000',
        mask: 7,
        modulo: 6,
        blockHash:
            '0x853ebec58dfb866d3106c0968278e163985fb5792926e7eeb846f869634ce49b',
    },
    reveal: {
        reveal:
            '0xc3b38cfbf33817a19a28f1e2334a06e13a8d0eadb3eb057da813d16012bee779',
    },
    payment: '196000000000000000',
    jackpotPayment: null,
};

export const jackpotHistoryItem = {
    id: '91',
    bet: {
        gambler: '0x3397cdef1501b1da81e00eb9685e75b5e7dce231',
        amount: '100000000000000000',
        mask: 2,
        modulo: 6,
        blockHash:
            '0xabd839875475428e133fc40b644b8de4ca313dfb7651ed825d705822d8fdb352',
    },
    reveal: {
        reveal:
            '0x8effce87af8d6a79696f978138a047f9f9d2c82482f9c0ad638e84d8c209911a',
    },
    payment: '588000000000000000',
    jackpotPayment: '196000000000000000',
};

export const history = [failedHistoryItem, winHistoryItem, jackpotHistoryItem];
