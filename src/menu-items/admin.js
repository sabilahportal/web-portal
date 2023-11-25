// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const admin = {
  id: 'admin',
  title: 'administrator',
  type: 'group',
  children: [
    {
      id: 'admin-user',
      title: 'Users',
      type: 'item',
      url: '/admin/users',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'admin-role',
      title: 'Role Access',
      type: 'item',
      url: '/admin/roles',
      icon: icons.IconPalette,
      breadcrumbs: false
    }
  ]
};

export default admin;
