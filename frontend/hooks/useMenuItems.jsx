import { useNavigate } from "react-router-dom";
import {
  GridViewOutlined,
  SpaceDashboardOutlined,
  ManageHistoryOutlined,
  AssessmentOutlined,
  AddToPhotosOutlined,
  CardMembershipOutlined,
  SettingsOutlined,
  NotificationsOutlined,
  ExitToAppOutlined,
} from "@mui/icons-material";

export const useMenuItems = (handleLogout) => {
  const navigate = useNavigate();

  return [
    {
      text: "Resources",
      icon: <SpaceDashboardOutlined />,
      action: () => navigate("/resources"),
    },
    {
      text: "Dashboard",
      icon: <GridViewOutlined />,
      action: () => navigate("/admin/dashboard"),
    },

    {
      text: "Manage Books",
      icon: <ManageHistoryOutlined />,
      action: () => navigate("/admin/manage-books"),
    },
    {
      text: "Reports",
      icon: <AssessmentOutlined />,
      action: () => navigate("/reports"),
    },
    {
      text: "Landed Books",
      icon: <AddToPhotosOutlined />,
      action: () => navigate("/landed-books"),
    },
    {
      text: "Members",
      icon: <CardMembershipOutlined />,
      action: () => navigate("/members"),
    },
    {
      text: "Setting",
      icon: <SettingsOutlined />,
      action: () => navigate("/settings"),
    },
    {
      text: "Notifications",
      icon: <NotificationsOutlined />,
      action: () => navigate("/notifications"),
    },
    {
      text: "Logout",
      icon: <ExitToAppOutlined />,
      action: () => {
        handleLogout();
      },
    },
  ];
};
