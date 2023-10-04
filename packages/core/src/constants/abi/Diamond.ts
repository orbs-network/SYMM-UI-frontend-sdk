export default [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'AllocatePartyA',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'DeallocatePartyA',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Deposit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Withdraw',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'allocate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'reqId',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'upnl',
            type: 'int256',
          },
          {
            internalType: 'bytes',
            name: 'gatewaySignature',
            type: 'bytes',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'signature',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'owner',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'nonce',
                type: 'address',
              },
            ],
            internalType: 'struct SchnorrSign',
            name: 'sigs',
            type: 'tuple',
          },
        ],
        internalType: 'struct SingleUpnlSig',
        name: 'upnlSig',
        type: 'tuple',
      },
    ],
    name: 'deallocate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'deposit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'depositAndAllocate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'depositFor',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'withdrawTo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'quoteId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'enum QuoteStatus',
        name: 'quoteStatus',
        type: 'uint8',
      },
    ],
    name: 'AcceptCancelCloseRequest',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'quoteId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'enum QuoteStatus',
        name: 'quoteStatus',
        type: 'uint8',
      },
    ],
    name: 'AcceptCancelRequest',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'partyB',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'AllocateForPartyB',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'partyB',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'AllocatePartyB',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'partyB',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'DeallocateForPartyB',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'partyB',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'DepositForPartyB',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'quoteId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'partyB',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'fillAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'closedPrice',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'enum QuoteStatus',
        name: 'quoteStatus',
        type: 'uint8',
      },
    ],
    name: 'EmergencyClosePosition',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'enum QuoteStatus',
        name: 'quoteStatus',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'quoteId',
        type: 'uint256',
      },
    ],
    name: 'ExpireQuote',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'quoteId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'partyB',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'fillAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'closedPrice',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'enum QuoteStatus',
        name: 'quoteStatus',
        type: 'uint8',
      },
    ],
    name: 'FillCloseRequest',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'partyB',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'quoteId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'enum QuoteStatus',
        name: 'quoteStatus',
        type: 'uint8',
      },
    ],
    name: 'LockQuote',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'quoteId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'partyB',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'fillAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'openedPrice',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'enum QuoteStatus',
        name: 'quoteStatus',
        type: 'uint8',
      },
    ],
    name: 'OpenPosition',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'partyB',
        type: 'address',
      },
    ],
    name: 'Register',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'quoteId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address[]',
        name: 'partyBsWhiteList',
        type: 'address[]',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'symbolId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'enum PositionType',
        name: 'positionType',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'enum OrderType',
        name: 'orderType',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'marketPrice',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'quantity',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'cva',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'mm',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'lf',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'maxInterestRate',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'enum QuoteStatus',
        name: 'quoteStatus',
        type: 'uint8',
      },
    ],
    name: 'SendQuote',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'origin',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
    ],
    name: 'TransferAllocation',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'partyB',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'quoteId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'enum QuoteStatus',
        name: 'quoteStatus',
        type: 'uint8',
      },
    ],
    name: 'UnlockQuote',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'quoteId',
        type: 'uint256',
      },
    ],
    name: 'acceptCancelCloseRequest',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'quoteId',
        type: 'uint256',
      },
    ],
    name: 'acceptCancelRequest',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'quoteId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'reqId',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'upnl',
            type: 'int256',
          },
          {
            internalType: 'bytes',
            name: 'gatewaySignature',
            type: 'bytes',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'signature',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'owner',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'nonce',
                type: 'address',
              },
            ],
            internalType: 'struct SchnorrSign',
            name: 'sigs',
            type: 'tuple',
          },
        ],
        internalType: 'struct SingleUpnlSig',
        name: 'upnlSig',
        type: 'tuple',
      },
    ],
    name: 'allocateAndLockQuote',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
    ],
    name: 'allocateForPartyB',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'reqId',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'upnl',
            type: 'int256',
          },
          {
            internalType: 'bytes',
            name: 'gatewaySignature',
            type: 'bytes',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'signature',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'owner',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'nonce',
                type: 'address',
              },
            ],
            internalType: 'struct SchnorrSign',
            name: 'sigs',
            type: 'tuple',
          },
        ],
        internalType: 'struct SingleUpnlSig',
        name: 'upnlSig',
        type: 'tuple',
      },
    ],
    name: 'deallocateForPartyB',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
    ],
    name: 'depositAndAllocateForPartyB',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'depositForPartyB',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'quoteId',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'reqId',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'upnlPartyA',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'upnlPartyB',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'gatewaySignature',
            type: 'bytes',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'signature',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'owner',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'nonce',
                type: 'address',
              },
            ],
            internalType: 'struct SchnorrSign',
            name: 'sigs',
            type: 'tuple',
          },
        ],
        internalType: 'struct PairUpnlAndPriceSig',
        name: 'upnlSig',
        type: 'tuple',
      },
    ],
    name: 'emergencyClosePosition',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'quoteId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'fillAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'closedPrice',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'reqId',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'upnlPartyA',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'upnlPartyB',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'gatewaySignature',
            type: 'bytes',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'signature',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'owner',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'nonce',
                type: 'address',
              },
            ],
            internalType: 'struct SchnorrSign',
            name: 'sigs',
            type: 'tuple',
          },
        ],
        internalType: 'struct PairUpnlAndPriceSig',
        name: 'upnlSig',
        type: 'tuple',
      },
    ],
    name: 'fillCloseRequest',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'quoteId',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'reqId',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'upnl',
            type: 'int256',
          },
          {
            internalType: 'bytes',
            name: 'gatewaySignature',
            type: 'bytes',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'signature',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'owner',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'nonce',
                type: 'address',
              },
            ],
            internalType: 'struct SchnorrSign',
            name: 'sigs',
            type: 'tuple',
          },
        ],
        internalType: 'struct SingleUpnlSig',
        name: 'upnlSig',
        type: 'tuple',
      },
    ],
    name: 'lockQuote',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'quoteId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'fillAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'openedPrice',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'reqId',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'upnlPartyA',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'upnlPartyB',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'gatewaySignature',
            type: 'bytes',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'signature',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'owner',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'nonce',
                type: 'address',
              },
            ],
            internalType: 'struct SchnorrSign',
            name: 'sigs',
            type: 'tuple',
          },
        ],
        internalType: 'struct PairUpnlAndPriceSig',
        name: 'upnlSig',
        type: 'tuple',
      },
    ],
    name: 'openPosition',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'register',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'origin',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'reqId',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'upnl',
            type: 'int256',
          },
          {
            internalType: 'bytes',
            name: 'gatewaySignature',
            type: 'bytes',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'signature',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'owner',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'nonce',
                type: 'address',
              },
            ],
            internalType: 'struct SchnorrSign',
            name: 'sigs',
            type: 'tuple',
          },
        ],
        internalType: 'struct SingleUpnlSig',
        name: 'upnlSig',
        type: 'tuple',
      },
    ],
    name: 'transferAllocation',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'quoteId',
        type: 'uint256',
      },
    ],
    name: 'unlockQuote',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
    ],
    name: 'FullyLiquidatedPartyA',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'partyB',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
    ],
    name: 'FullyLiquidatedPartyB',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'liquidator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
    ],
    name: 'LiquidatePartyA',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'liquidator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'partyB',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
    ],
    name: 'LiquidatePartyB',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'liquidator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'quoteIds',
        type: 'uint256[]',
      },
    ],
    name: 'LiquidatePositionsPartyA',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'liquidator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'partyB',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'quoteIds',
        type: 'uint256[]',
      },
    ],
    name: 'LiquidatePositionsPartyB',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'reqId',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'upnl',
            type: 'int256',
          },
          {
            internalType: 'bytes',
            name: 'gatewaySignature',
            type: 'bytes',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'signature',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'owner',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'nonce',
                type: 'address',
              },
            ],
            internalType: 'struct SchnorrSign',
            name: 'sigs',
            type: 'tuple',
          },
        ],
        internalType: 'struct SingleUpnlSig',
        name: 'upnlSig',
        type: 'tuple',
      },
    ],
    name: 'liquidatePartyA',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'partyB',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'reqId',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'upnl',
            type: 'int256',
          },
          {
            internalType: 'bytes',
            name: 'gatewaySignature',
            type: 'bytes',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'signature',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'owner',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'nonce',
                type: 'address',
              },
            ],
            internalType: 'struct SchnorrSign',
            name: 'sigs',
            type: 'tuple',
          },
        ],
        internalType: 'struct SingleUpnlSig',
        name: 'upnlSig',
        type: 'tuple',
      },
    ],
    name: 'liquidatePartyB',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'reqId',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
          },
          {
            internalType: 'uint256[]',
            name: 'quoteIds',
            type: 'uint256[]',
          },
          {
            internalType: 'uint256[]',
            name: 'prices',
            type: 'uint256[]',
          },
          {
            internalType: 'bytes',
            name: 'gatewaySignature',
            type: 'bytes',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'signature',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'owner',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'nonce',
                type: 'address',
              },
            ],
            internalType: 'struct SchnorrSign',
            name: 'sigs',
            type: 'tuple',
          },
        ],
        internalType: 'struct PriceSig',
        name: 'priceSig',
        type: 'tuple',
      },
    ],
    name: 'liquidatePositionsPartyA',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'partyB',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'reqId',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
          },
          {
            internalType: 'uint256[]',
            name: 'quoteIds',
            type: 'uint256[]',
          },
          {
            internalType: 'uint256[]',
            name: 'prices',
            type: 'uint256[]',
          },
          {
            internalType: 'bytes',
            name: 'gatewaySignature',
            type: 'bytes',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'signature',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'owner',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'nonce',
                type: 'address',
              },
            ],
            internalType: 'struct SchnorrSign',
            name: 'sigs',
            type: 'tuple',
          },
        ],
        internalType: 'struct PriceSig',
        name: 'priceSig',
        type: 'tuple',
      },
    ],
    name: 'liquidatePositionsPartyB',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'ActiveEmergencyMode',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'minAcceptableQuoteValue',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'minAcceptablePortionLF',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tradingFee',
        type: 'uint256',
      },
    ],
    name: 'AddSymbol',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'DeactiveEmergencyMode',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'PauseAccounting',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'PauseGlobal',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'PauseLiquidation',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'PausePartyAActions',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'PausePartyBActions',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'RoleGranted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'RoleRevoked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'balanceLimitPerUser',
        type: 'uint256',
      },
    ],
    name: 'SetBalanceLimitPerUser',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'collateral',
        type: 'address',
      },
    ],
    name: 'SetCollateral',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldDeallocateCooldown',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newDeallocateCooldown',
        type: 'uint256',
      },
    ],
    name: 'SetDeallocateCooldown',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'oldFeeCollector',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newFeeCollector',
        type: 'address',
      },
    ],
    name: 'SetFeeCollector',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldForceCancelCloseCooldown',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newForceCancelCloseCooldown',
        type: 'uint256',
      },
    ],
    name: 'SetForceCancelCloseCooldown',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldForceCancelCooldown',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newForceCancelCooldown',
        type: 'uint256',
      },
    ],
    name: 'SetForceCancelCooldown',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldForceCloseCooldown',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newForceCloseCooldown',
        type: 'uint256',
      },
    ],
    name: 'SetForceCloseCooldown',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldForceCloseGapRatio',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newForceCloseGapRatio',
        type: 'uint256',
      },
    ],
    name: 'SetForceCloseGapRatio',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldLiquidationTimeout',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newLiquidationTimeout',
        type: 'uint256',
      },
    ],
    name: 'SetLiquidationTimeout',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldLiquidatorShare',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newLiquidatorShare',
        type: 'uint256',
      },
    ],
    name: 'SetLiquidatorShare',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'upnlValidTime',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'priceValidTime',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'priceQuantityValidTime',
        type: 'uint256',
      },
    ],
    name: 'SetMuonConfig',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'muonAppId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'gateway',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'x',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'parity',
        type: 'uint8',
      },
    ],
    name: 'SetMuonIds',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'partyB',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'status',
        type: 'bool',
      },
    ],
    name: 'SetPartyBEmergencyStatus',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldPendingQuotesValidLength',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newPendingQuotesValidLength',
        type: 'uint256',
      },
    ],
    name: 'SetPendingQuotesValidLength',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'isSuspended',
        type: 'bool',
      },
    ],
    name: 'SetSuspendedAddress',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'symbolId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldMinAcceptableQuoteValue',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldMinAcceptablePortionLF',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'minAcceptableQuoteValue',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'minAcceptablePortionLF',
        type: 'uint256',
      },
    ],
    name: 'SetSymbolAcceptableValues',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'symbolId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldMaxSlippage',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'maxSlippage',
        type: 'uint256',
      },
    ],
    name: 'SetSymbolMaxSlippage',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'symbolId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldTradingFee',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tradingFee',
        type: 'uint256',
      },
    ],
    name: 'SetSymbolTradingFee',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'oldState',
        type: 'bool',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'isValid',
        type: 'bool',
      },
    ],
    name: 'SetSymbolValidationState',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'UnpauseAccounting',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'UnpauseGlobal',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'UnpauseLiquidation',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'UnpausePartyAActions',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'UnpausePartyBActions',
    type: 'event',
  },
  {
    inputs: [],
    name: 'activeEmergencyMode',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'minAcceptableQuoteValue',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'minAcceptablePortionLF',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'tradingFee',
        type: 'uint256',
      },
    ],
    name: 'addSymbol',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'symbolId',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'bool',
            name: 'isValid',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'minAcceptableQuoteValue',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minAcceptablePortionLF',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'tradingFee',
            type: 'uint256',
          },
        ],
        internalType: 'struct Symbol[]',
        name: 'symbols',
        type: 'tuple[]',
      },
    ],
    name: 'addSymbols',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'deactiveEmergencyMode',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'init',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pauseAccounting',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pauseGlobal',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pauseLiquidation',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pausePartyAActions',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pausePartyBActions',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'setAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'balanceLimitPerUser',
        type: 'uint256',
      },
    ],
    name: 'setBalanceLimitPerUser',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'collateral',
        type: 'address',
      },
    ],
    name: 'setCollateral',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'deallocateCooldown',
        type: 'uint256',
      },
    ],
    name: 'setDeallocateCooldown',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'feeCollector',
        type: 'address',
      },
    ],
    name: 'setFeeCollector',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'forceCancelCloseCooldown',
        type: 'uint256',
      },
    ],
    name: 'setForceCancelCloseCooldown',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'forceCancelCooldown',
        type: 'uint256',
      },
    ],
    name: 'setForceCancelCooldown',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'forceCloseCooldown',
        type: 'uint256',
      },
    ],
    name: 'setForceCloseCooldown',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'forceCloseGapRatio',
        type: 'uint256',
      },
    ],
    name: 'setForceCloseGapRatio',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'liquidationTimeout',
        type: 'uint256',
      },
    ],
    name: 'setLiquidationTimeout',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'liquidatorShare',
        type: 'uint256',
      },
    ],
    name: 'setLiquidatorShare',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'upnlValidTime',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'priceValidTime',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'priceQuantityValidTime',
        type: 'uint256',
      },
    ],
    name: 'setMuonConfig',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'muonAppId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'validGateway',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'x',
            type: 'uint256',
          },
          {
            internalType: 'uint8',
            name: 'parity',
            type: 'uint8',
          },
        ],
        internalType: 'struct PublicKey',
        name: 'publicKey',
        type: 'tuple',
      },
    ],
    name: 'setMuonIds',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'partyBs',
        type: 'address[]',
      },
      {
        internalType: 'bool',
        name: 'status',
        type: 'bool',
      },
    ],
    name: 'setPartyBEmergencyStatus',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'pendingQuotesValidLength',
        type: 'uint256',
      },
    ],
    name: 'setPendingQuotesValidLength',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'isSuspended',
        type: 'bool',
      },
    ],
    name: 'setSuspendedAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'symbolId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'minAcceptableQuoteValue',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'minAcceptablePortionLF',
        type: 'uint256',
      },
    ],
    name: 'setSymbolAcceptableValues',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'symbolId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'tradingFee',
        type: 'uint256',
      },
    ],
    name: 'setSymbolTradingFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'symbolId',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'isValid',
        type: 'bool',
      },
    ],
    name: 'setSymbolValidationState',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unpauseAccounting',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unpauseGlobal',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unpauseLiquidation',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unpausePartyAActions',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unpausePartyBActions',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'facetAddress',
            type: 'address',
          },
          {
            internalType: 'enum IDiamondCut.FacetCutAction',
            name: 'action',
            type: 'uint8',
          },
          {
            internalType: 'bytes4[]',
            name: 'functionSelectors',
            type: 'bytes4[]',
          },
        ],
        indexed: false,
        internalType: 'struct IDiamondCut.FacetCut[]',
        name: '_diamondCut',
        type: 'tuple[]',
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_init',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_calldata',
        type: 'bytes',
      },
    ],
    name: 'DiamondCut',
    type: 'event',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'facetAddress',
            type: 'address',
          },
          {
            internalType: 'enum IDiamondCut.FacetCutAction',
            name: 'action',
            type: 'uint8',
          },
          {
            internalType: 'bytes4[]',
            name: 'functionSelectors',
            type: 'bytes4[]',
          },
        ],
        internalType: 'struct IDiamondCut.FacetCut[]',
        name: '_diamondCut',
        type: 'tuple[]',
      },
      {
        internalType: 'address',
        name: '_init',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_calldata',
        type: 'bytes',
      },
    ],
    name: 'diamondCut',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
    ],
    name: 'allocatedBalanceOfPartyA',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'partyB',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
    ],
    name: 'allocatedBalanceOfPartyB',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
    ],
    name: 'balanceInfoOfPartyA',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'partyB',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
    ],
    name: 'balanceInfoOfPartyB',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'coolDownsOfMA',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'forceCloseGapRatio',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getBalanceLimitPerUser',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getCollateral',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getFeeCollector',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getMuonConfig',
    outputs: [
      {
        internalType: 'uint256',
        name: 'upnlValidTime',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'priceValidTime',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'priceQuantityValidTime',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getMuonIds',
    outputs: [
      {
        internalType: 'uint256',
        name: 'muonAppId',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'x',
            type: 'uint256',
          },
          {
            internalType: 'uint8',
            name: 'parity',
            type: 'uint8',
          },
        ],
        internalType: 'struct PublicKey',
        name: 'muonPublicKey',
        type: 'tuple',
      },
      {
        internalType: 'address',
        name: 'validGateway',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'start',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'size',
        type: 'uint256',
      },
    ],
    name: 'getPartyAOpenPositions',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'address[]',
            name: 'partyBsWhiteList',
            type: 'address[]',
          },
          {
            internalType: 'uint256',
            name: 'symbolId',
            type: 'uint256',
          },
          {
            internalType: 'enum PositionType',
            name: 'positionType',
            type: 'uint8',
          },
          {
            internalType: 'enum OrderType',
            name: 'orderType',
            type: 'uint8',
          },
          {
            internalType: 'uint256',
            name: 'openedPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'requestedOpenPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'marketPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'quantity',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'closedAmount',
            type: 'uint256',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'cva',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'mm',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'lf',
                type: 'uint256',
              },
            ],
            internalType: 'struct LockedValues',
            name: 'initialLockedValues',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'cva',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'mm',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'lf',
                type: 'uint256',
              },
            ],
            internalType: 'struct LockedValues',
            name: 'lockedValues',
            type: 'tuple',
          },
          {
            internalType: 'uint256',
            name: 'maxInterestRate',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'partyA',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'partyB',
            type: 'address',
          },
          {
            internalType: 'enum QuoteStatus',
            name: 'quoteStatus',
            type: 'uint8',
          },
          {
            internalType: 'uint256',
            name: 'avgClosedPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'requestedClosePrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'quantityToClose',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'parentId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'createTimestamp',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'modifyTimestamp',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256',
          },
        ],
        internalType: 'struct Quote[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
    ],
    name: 'getPartyAPendingQuotes',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'partyB',
        type: 'address',
      },
    ],
    name: 'getPartyBEmergencyStatus',
    outputs: [
      {
        internalType: 'bool',
        name: 'isEmergency',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'partyB',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'start',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'size',
        type: 'uint256',
      },
    ],
    name: 'getPartyBOpenPositions',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'address[]',
            name: 'partyBsWhiteList',
            type: 'address[]',
          },
          {
            internalType: 'uint256',
            name: 'symbolId',
            type: 'uint256',
          },
          {
            internalType: 'enum PositionType',
            name: 'positionType',
            type: 'uint8',
          },
          {
            internalType: 'enum OrderType',
            name: 'orderType',
            type: 'uint8',
          },
          {
            internalType: 'uint256',
            name: 'openedPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'requestedOpenPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'marketPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'quantity',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'closedAmount',
            type: 'uint256',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'cva',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'mm',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'lf',
                type: 'uint256',
              },
            ],
            internalType: 'struct LockedValues',
            name: 'initialLockedValues',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'cva',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'mm',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'lf',
                type: 'uint256',
              },
            ],
            internalType: 'struct LockedValues',
            name: 'lockedValues',
            type: 'tuple',
          },
          {
            internalType: 'uint256',
            name: 'maxInterestRate',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'partyA',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'partyB',
            type: 'address',
          },
          {
            internalType: 'enum QuoteStatus',
            name: 'quoteStatus',
            type: 'uint8',
          },
          {
            internalType: 'uint256',
            name: 'avgClosedPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'requestedClosePrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'quantityToClose',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'parentId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'createTimestamp',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'modifyTimestamp',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256',
          },
        ],
        internalType: 'struct Quote[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'partyB',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
    ],
    name: 'getPartyBPendingQuotes',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'quoteId',
        type: 'uint256',
      },
    ],
    name: 'getQuote',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'address[]',
            name: 'partyBsWhiteList',
            type: 'address[]',
          },
          {
            internalType: 'uint256',
            name: 'symbolId',
            type: 'uint256',
          },
          {
            internalType: 'enum PositionType',
            name: 'positionType',
            type: 'uint8',
          },
          {
            internalType: 'enum OrderType',
            name: 'orderType',
            type: 'uint8',
          },
          {
            internalType: 'uint256',
            name: 'openedPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'requestedOpenPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'marketPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'quantity',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'closedAmount',
            type: 'uint256',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'cva',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'mm',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'lf',
                type: 'uint256',
              },
            ],
            internalType: 'struct LockedValues',
            name: 'initialLockedValues',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'cva',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'mm',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'lf',
                type: 'uint256',
              },
            ],
            internalType: 'struct LockedValues',
            name: 'lockedValues',
            type: 'tuple',
          },
          {
            internalType: 'uint256',
            name: 'maxInterestRate',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'partyA',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'partyB',
            type: 'address',
          },
          {
            internalType: 'enum QuoteStatus',
            name: 'quoteStatus',
            type: 'uint8',
          },
          {
            internalType: 'uint256',
            name: 'avgClosedPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'requestedClosePrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'quantityToClose',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'parentId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'createTimestamp',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'modifyTimestamp',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256',
          },
        ],
        internalType: 'struct Quote',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'start',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'size',
        type: 'uint256',
      },
    ],
    name: 'getQuotes',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'address[]',
            name: 'partyBsWhiteList',
            type: 'address[]',
          },
          {
            internalType: 'uint256',
            name: 'symbolId',
            type: 'uint256',
          },
          {
            internalType: 'enum PositionType',
            name: 'positionType',
            type: 'uint8',
          },
          {
            internalType: 'enum OrderType',
            name: 'orderType',
            type: 'uint8',
          },
          {
            internalType: 'uint256',
            name: 'openedPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'requestedOpenPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'marketPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'quantity',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'closedAmount',
            type: 'uint256',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'cva',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'mm',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'lf',
                type: 'uint256',
              },
            ],
            internalType: 'struct LockedValues',
            name: 'initialLockedValues',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'cva',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'mm',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'lf',
                type: 'uint256',
              },
            ],
            internalType: 'struct LockedValues',
            name: 'lockedValues',
            type: 'tuple',
          },
          {
            internalType: 'uint256',
            name: 'maxInterestRate',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'partyA',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'partyB',
            type: 'address',
          },
          {
            internalType: 'enum QuoteStatus',
            name: 'quoteStatus',
            type: 'uint8',
          },
          {
            internalType: 'uint256',
            name: 'avgClosedPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'requestedClosePrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'quantityToClose',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'parentId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'createTimestamp',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'modifyTimestamp',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256',
          },
        ],
        internalType: 'struct Quote[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'quoteId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'size',
        type: 'uint256',
      },
    ],
    name: 'getQuotesByParent',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'address[]',
            name: 'partyBsWhiteList',
            type: 'address[]',
          },
          {
            internalType: 'uint256',
            name: 'symbolId',
            type: 'uint256',
          },
          {
            internalType: 'enum PositionType',
            name: 'positionType',
            type: 'uint8',
          },
          {
            internalType: 'enum OrderType',
            name: 'orderType',
            type: 'uint8',
          },
          {
            internalType: 'uint256',
            name: 'openedPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'requestedOpenPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'marketPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'quantity',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'closedAmount',
            type: 'uint256',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'cva',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'mm',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'lf',
                type: 'uint256',
              },
            ],
            internalType: 'struct LockedValues',
            name: 'initialLockedValues',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'cva',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'mm',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'lf',
                type: 'uint256',
              },
            ],
            internalType: 'struct LockedValues',
            name: 'lockedValues',
            type: 'tuple',
          },
          {
            internalType: 'uint256',
            name: 'maxInterestRate',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'partyA',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'partyB',
            type: 'address',
          },
          {
            internalType: 'enum QuoteStatus',
            name: 'quoteStatus',
            type: 'uint8',
          },
          {
            internalType: 'uint256',
            name: 'avgClosedPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'requestedClosePrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'quantityToClose',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'parentId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'createTimestamp',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'modifyTimestamp',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256',
          },
        ],
        internalType: 'struct Quote[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'str',
        type: 'string',
      },
    ],
    name: 'getRoleHash',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'symbolId',
        type: 'uint256',
      },
    ],
    name: 'getSymbol',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'symbolId',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'bool',
            name: 'isValid',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'minAcceptableQuoteValue',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minAcceptablePortionLF',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'tradingFee',
            type: 'uint256',
          },
        ],
        internalType: 'struct Symbol',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'start',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'size',
        type: 'uint256',
      },
    ],
    name: 'getSymbols',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'symbolId',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'bool',
            name: 'isValid',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'minAcceptableQuoteValue',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minAcceptablePortionLF',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'tradingFee',
            type: 'uint256',
          },
        ],
        internalType: 'struct Symbol[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
    ],
    name: 'hasRole',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
    ],
    name: 'isPartyALiquidated',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'isPartyB',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'partyB',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
    ],
    name: 'isPartyBLiquidated',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'isSuspended',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'liquidationTimeout',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'liquidatorShare',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
    ],
    name: 'nonceOfPartyA',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'partyB',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
    ],
    name: 'nonceOfPartyB',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
    ],
    name: 'partyALiquidationTimestamp',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
    ],
    name: 'partyAPositionsCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
    ],
    name: 'partyAStats',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'partyB',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
    ],
    name: 'partyBLiquidationTimestamp',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'partyB',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
    ],
    name: 'partyBPositionsCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pauseState',
    outputs: [
      {
        internalType: 'bool',
        name: 'globalPaused',
        type: 'bool',
      },
      {
        internalType: 'bool',
        name: 'liquidationPaused',
        type: 'bool',
      },
      {
        internalType: 'bool',
        name: 'accountingPaused',
        type: 'bool',
      },
      {
        internalType: 'bool',
        name: 'partyBActionsPaused',
        type: 'bool',
      },
      {
        internalType: 'bool',
        name: 'partyAActionsPaused',
        type: 'bool',
      },
      {
        internalType: 'bool',
        name: 'emergencyMode',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pendingQuotesValidLength',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'start',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'size',
        type: 'uint256',
      },
    ],
    name: 'quoteIdsOf',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'quotesLength',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: 'symbolIds',
        type: 'uint256[]',
      },
    ],
    name: 'symbolNameById',
    outputs: [
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: 'quoteIds',
        type: 'uint256[]',
      },
    ],
    name: 'symbolNameByQuoteId',
    outputs: [
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: 'quoteIds',
        type: 'uint256[]',
      },
    ],
    name: 'symbolsByQuoteId',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'symbolId',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'bool',
            name: 'isValid',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'minAcceptableQuoteValue',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minAcceptablePortionLF',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'tradingFee',
            type: 'uint256',
          },
        ],
        internalType: 'struct Symbol[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'withdrawCooldownOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: '_functionSelector',
        type: 'bytes4',
      },
    ],
    name: 'facetAddress',
    outputs: [
      {
        internalType: 'address',
        name: 'facetAddress_',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'facetAddresses',
    outputs: [
      {
        internalType: 'address[]',
        name: 'facetAddresses_',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_facet',
        type: 'address',
      },
    ],
    name: 'facetFunctionSelectors',
    outputs: [
      {
        internalType: 'bytes4[]',
        name: '_facetFunctionSelectors',
        type: 'bytes4[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'facets',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'facetAddress',
            type: 'address',
          },
          {
            internalType: 'bytes4[]',
            name: 'functionSelectors',
            type: 'bytes4[]',
          },
        ],
        internalType: 'struct IDiamondLoupe.Facet[]',
        name: 'facets_',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: '_interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'quoteId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'enum QuoteStatus',
        name: 'quoteStatus',
        type: 'uint8',
      },
    ],
    name: 'ForceCancelCloseRequest',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'quoteId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'enum QuoteStatus',
        name: 'quoteStatus',
        type: 'uint8',
      },
    ],
    name: 'ForceCancelQuote',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'quoteId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'partyB',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'fillAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'closedPrice',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'enum QuoteStatus',
        name: 'quoteStatus',
        type: 'uint8',
      },
    ],
    name: 'ForceClosePosition',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'partyB',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'quoteId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'enum QuoteStatus',
        name: 'quoteStatus',
        type: 'uint8',
      },
    ],
    name: 'RequestToCancelCloseRequest',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'partyB',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'enum QuoteStatus',
        name: 'quoteStatus',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'quoteId',
        type: 'uint256',
      },
    ],
    name: 'RequestToCancelQuote',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'partyA',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'partyB',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'quoteId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'closePrice',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'quantityToClose',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'enum OrderType',
        name: 'orderType',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'enum QuoteStatus',
        name: 'quoteStatus',
        type: 'uint8',
      },
    ],
    name: 'RequestToClosePosition',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: 'expiredQuoteIds',
        type: 'uint256[]',
      },
    ],
    name: 'expireQuote',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'quoteId',
        type: 'uint256',
      },
    ],
    name: 'forceCancelCloseRequest',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'quoteId',
        type: 'uint256',
      },
    ],
    name: 'forceCancelQuote',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'quoteId',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'reqId',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'upnlPartyA',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'upnlPartyB',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'gatewaySignature',
            type: 'bytes',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'signature',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'owner',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'nonce',
                type: 'address',
              },
            ],
            internalType: 'struct SchnorrSign',
            name: 'sigs',
            type: 'tuple',
          },
        ],
        internalType: 'struct PairUpnlAndPriceSig',
        name: 'upnlSig',
        type: 'tuple',
      },
    ],
    name: 'forceClosePosition',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'quoteId',
        type: 'uint256',
      },
    ],
    name: 'requestToCancelCloseRequest',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'quoteId',
        type: 'uint256',
      },
    ],
    name: 'requestToCancelQuote',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'quoteId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'closePrice',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'quantityToClose',
        type: 'uint256',
      },
      {
        internalType: 'enum OrderType',
        name: 'orderType',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'reqId',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'upnl',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'gatewaySignature',
            type: 'bytes',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'signature',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'owner',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'nonce',
                type: 'address',
              },
            ],
            internalType: 'struct SchnorrSign',
            name: 'sigs',
            type: 'tuple',
          },
        ],
        internalType: 'struct SingleUpnlAndPriceSig',
        name: 'upnlSig',
        type: 'tuple',
      },
    ],
    name: 'requestToClosePosition',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'partyBsWhiteList',
        type: 'address[]',
      },
      {
        internalType: 'uint256',
        name: 'symbolId',
        type: 'uint256',
      },
      {
        internalType: 'enum PositionType',
        name: 'positionType',
        type: 'uint8',
      },
      {
        internalType: 'enum OrderType',
        name: 'orderType',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'quantity',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'cva',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'mm',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'lf',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxInterestRate',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'reqId',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'upnl',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'gatewaySignature',
            type: 'bytes',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'signature',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'owner',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'nonce',
                type: 'address',
              },
            ],
            internalType: 'struct SchnorrSign',
            name: 'sigs',
            type: 'tuple',
          },
        ],
        internalType: 'struct SingleUpnlAndPriceSig',
        name: 'upnlSig',
        type: 'tuple',
      },
    ],
    name: 'sendQuote',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const
