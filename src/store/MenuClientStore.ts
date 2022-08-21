import { types } from 'mobx-state-tree';

const MenuClientStore = types
    .model('MenuClientStore', {
        index: types.number,
    })
    .actions(self => ({
        onIndexMenu(index: number) {
            self.index = index;
        },
    }));

const menuClientStore = MenuClientStore.create({ index: 1 });

export default menuClientStore;
