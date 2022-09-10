export interface TypeMenuSidebar {
    id: number,
    title: string,
    children: ChildrenMenuSideBar[]
}

interface ChildrenMenuSideBar {
    id: number,
    title: string,
    path: string,
}