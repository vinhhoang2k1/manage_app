import { TypeMenuSidebar } from "../../Models/sidebar.models"
export const listMenuSidebar: TypeMenuSidebar[] = [
    {
        id: 1,
        title: "Trang chủ",
        children: [
            {
                id: 1,
                title: 'Tổng quan',
                path: "/overview",
            }
        ]
    },
    {
        id: 2,
        title: "Người dùng",
        children: [
            {
                id: 1,
                title: 'Danh sách người dùng ',
                path: "/list/user",
            },
            {
                id: 2,
                title: 'Tạo người dùng ',
                path: "/list/user",
            }
        ]
    },
    {
        id: 3,
        title: "Khách hàng",
        children: [
            {
                id: 1,
                title: 'Danh sach khach hang',
                path: "/list/customer",
            }
        ]
    },
]