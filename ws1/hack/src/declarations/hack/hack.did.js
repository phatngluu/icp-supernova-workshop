export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'count' : IDL.Func([], [IDL.Nat], []),
    'getCount' : IDL.Func([], [IDL.Nat], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
