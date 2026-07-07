import { Listing, BlogPost, EmergencyContact, Review } from './types';

export const TAM_HAI_IMAGE = '/src/assets/images/tam_hai_landscape_1783394462115.jpg';

export const INITIAL_LISTINGS: Listing[] = [
  // CHỖ Ở (accommodation)
  {
    id: 'ac-1',
    name: 'Tam Hải Lagoon Homestay',
    category: 'accommodation',
    subCategory: 'Homestay',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    address: 'Thôn 1, xã đảo Tam Hải, Núi Thành, Quảng Nam (Sát bờ kè phía sông lộng gió)',
    priceRange: '300.000đ - 550.000đ / phòng / đêm',
    phone: '0905123456',
    zalo: 'https://zalo.me/0905123456',
    mapUrl: 'https://maps.google.com/maps?q=Tam+Hải,+Núi+Thành,+Quảng+Nam&t=&z=14&ie=UTF8&iwloc=&output=embed',
    description: 'Lagoon Homestay mang phong cách mộc mạc, gần gũi với thiên nhiên xứ đảo. Nằm ngay sát bờ sông lộng gió nơi bạn có thể ngắm hoàng hôn rực rỡ buông xuống mặt nước. Homestay có khoảng sân vườn rộng rãi rợp bóng dừa cổ thụ, thích hợp tổ chức tiệc BBQ hải sản ngoài trời. Chủ nhà vô cùng mến khách, sẵn sàng chia sẻ thông tin về các địa điểm vui chơi độc lạ trên đảo.',
    amenities: ['Wifi miễn phí', 'Điều hòa nhiệt độ', 'Bếp nấu tự do', 'Sân nướng BBQ', 'Cho mượn xe đạp', 'Gần bờ kè hóng gió'],
    rating: 4.8,
    reviewsCount: 15,
    featured: true
  },
  {
    id: 'ac-2',
    name: 'Gió Biển Camping & Homestay',
    category: 'accommodation',
    subCategory: 'Cắm trại',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    address: 'Khu vực Bãi Nồm, xã đảo Tam Hải, Núi Thành, Quảng Nam',
    priceRange: '150.000đ - 350.000đ / lều (bao gồm ăn sáng nhẹ)',
    phone: '0914987654',
    zalo: 'https://zalo.me/0914987654',
    mapUrl: 'https://maps.google.com/maps?q=Bãi+Nồm,+Tam+Hải,+Núi+Thành,+Quảng+Nam&t=&z=14&ie=UTF8&iwloc=&output=embed',
    description: 'Tọa lạc ngay bên bãi cát mịn của Bãi Nồm - nơi ngắm bình minh đẹp nhất Tam Hải. Gió Biển cung cấp dịch vụ cắm trại cao cấp (Glamping) đầy đủ chăn, gối, nệm êm ái, nước ngọt tắm rửa thoải mái. Buổi tối, du khách sẽ được đốt lửa trại, nghe tiếng sóng vỗ rì rào và thưởng thức hải sản tươi rói nướng mọi ngay tại bãi biển.',
    amenities: ['Lều trại chống thấm cao cấp', 'Khu tắm nước ngọt sạch sẽ', 'Đốt lửa trại bãi biển', 'Có phục vụ hải sản tươi', 'Chèo SUP biển', 'Bảo vệ an ninh 24/7'],
    rating: 4.9,
    reviewsCount: 22,
    featured: true
  },
  {
    id: 'ac-3',
    name: 'Nhà nghỉ Hương Biển',
    category: 'accommodation',
    subCategory: 'Nhà nghỉ',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    address: 'Thôn 2, gần Bến phà Tam Hải, Núi Thành, Quảng Nam',
    priceRange: '200.000đ - 350.000đ / phòng / đêm',
    phone: '0983111222',
    zalo: 'https://zalo.me/0983111222',
    mapUrl: 'https://maps.google.com/maps?q=Bến+phà+Tam+Hải,+Quảng+Nam&t=&z=14&ie=UTF8&iwloc=&output=embed',
    description: 'Nằm ở vị trí đắc địa cách bến phà Tam Hải chỉ 150m, Hương Biển là lựa chọn kinh tế hàng đầu cho các nhóm bạn trẻ đi phượt hoặc gia đình nhỏ cần phòng nghỉ khép kín riêng tư. Phòng nghỉ sạch sẽ, giường đệm êm, trang bị đầy đủ điều hòa, tivi, bình nóng lạnh. Tại đây cũng cung cấp dịch vụ cho thuê xe máy giá rẻ để khám phá đảo.',
    amenities: ['Wifi tốc độ cao', 'Điều hòa & Nước nóng', 'Tủ lạnh mini', 'Bãi đỗ xe máy an toàn', 'Cho thuê xe máy tại chỗ', 'Hỗ trợ đặt tàu đi Hòn Mang'],
    rating: 4.5,
    reviewsCount: 8
  },
  {
    id: 'ac-4',
    name: 'Bàn Than Eco-Lodge',
    category: 'accommodation',
    subCategory: 'Homestay',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80',
    address: 'Thôn 4, gần lối xuống Ghềnh đá Bàn Than, Tam Hải, Quảng Nam',
    priceRange: '450.000đ - 750.000đ / phòng / đêm',
    phone: '0935555666',
    zalo: 'https://zalo.me/0935555666',
    mapUrl: 'https://maps.google.com/maps?q=Ghềnh+đá+Bàn+Than,+Tam+Hải&t=&z=14&ie=UTF8&iwloc=&output=embed',
    description: 'Sở hữu lối kiến trúc độc đáo làm hoàn toàn từ tre, gỗ và lợp lá cọ thiên nhiên, Bàn Than Eco-Lodge mang tới trải nghiệm nghỉ dưỡng bền vững đúng nghĩa. Nằm nép mình bên rặng dừa thơ mộng, chỉ vài bước chân là bạn đã tới Ghềnh đá Bàn Than nổi tiếng. Các phòng nghỉ đều có ban công lớn hướng ra biển cả để tận hưởng gió trời lồng lộng.',
    amenities: ['Bữa sáng miễn phí', 'Ban công view biển lộng gió', 'Thiết kế eco-friendly', 'Hướng dẫn viên bản địa', 'Trà & Cà phê miễn phí', 'Đặt tour cano lặn biển'],
    rating: 4.7,
    reviewsCount: 19,
    featured: true
  },

  // ĂN UỐNG (dining)
  {
    id: 'di-1',
    name: 'Nhà hàng Hải Sản Cây Bàng',
    category: 'dining',
    subCategory: 'Quán hải sản',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    address: 'Đường Bờ Kè Thôn 2, xã đảo Tam Hải, Núi Thành, Quảng Nam',
    priceRange: '100.000đ - 350.000đ / người (Hải sản cân ký tại bể)',
    phone: '0906777888',
    zalo: 'https://zalo.me/0906777888',
    mapUrl: 'https://maps.google.com/maps?q=Bờ+kè+Tam+Hải,+Quảng+Nam&t=&z=14&ie=UTF8&iwloc=&output=embed',
    description: 'Hải Sản Cây Bàng là điểm hẹn ẩm thực nức tiếng bậc nhất đảo Tam Hải. Quán có vị trí đắc địa ngay sát mặt nước, rợp bóng mát của những cây bàng cổ thụ. Toàn bộ hải sản từ tôm hùm, cua huỳnh đế rừng dừa, cua gạch, mực nhảy, cá bớp, cá dìa đều được nhập trực tiếp từ thuyền chài vào buổi sáng, giữ nguyên độ tươi ngọt tự nhiên.',
    amenities: ['Hải sản tươi sống tự chọn', 'Bàn ăn sát mép biển mát mẻ', 'Chỗ đỗ xe rộng rãi', 'Phục vụ nhanh chóng', 'Nhận chế biến theo yêu cầu', 'Karaoke gia đình miễn phí'],
    rating: 4.9,
    reviewsCount: 35,
    featured: true
  },
  {
    id: 'di-2',
    name: 'Quán Ăn Bình Dân Cô Út',
    category: 'dining',
    subCategory: 'Quán bình dân',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    address: 'Khu vực Chợ Tam Hải, Núi Thành, Quảng Nam',
    priceRange: '25.000đ - 70.000đ / món (Cơm phần bình dân giá chỉ từ 30k)',
    phone: '0972888999',
    zalo: 'https://zalo.me/0972888999',
    mapUrl: 'https://maps.google.com/maps?q=Chợ+Tam+Hải,+Quảng+Nam&t=&z=14&ie=UTF8&iwloc=&output=embed',
    description: 'Nếu muốn thưởng thức những bữa cơm gia đình đậm chất miền Trung hay một tô Mì Quảng tôm thịt biển thơm ngon đúng điệu, quán Cô Út ngay chợ Tam Hải là địa chỉ tuyệt vời. Thức ăn nêm nếm đậm đà, đồ ăn kèm thay đổi theo ngày dựa vào mớ cá, mớ mực tươi ngon mà chú Út đánh bắt được ngoài khơi hằng đêm.',
    amenities: ['Mì Quảng cá biển/tôm thịt đặc sản', 'Cơm phần bình dân đầy đặn', 'Trà đá miễn phí', 'Giá cả vô cùng rẻ', 'Có giao tận homestay', 'Mở cửa từ sáng sớm đến tối muộn'],
    rating: 4.6,
    reviewsCount: 14
  },
  {
    id: 'di-3',
    name: 'Dừa Homestay & Cafe',
    category: 'dining',
    subCategory: 'Cafe',
    image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80',
    address: 'Thôn 1, xã đảo Tam Hải, Núi Thành, Quảng Nam',
    priceRange: '20.000đ - 45.000đ / đồ uống',
    phone: '0934222333',
    zalo: 'https://zalo.me/0934222333',
    mapUrl: 'https://maps.google.com/maps?q=Tam+Hải,+Núi+Thành,+Quảng+Nam&t=&z=14&ie=UTF8&iwloc=&output=embed',
    description: 'Một quán cà phê kết hợp homestay ẩn mình dưới vườn dừa hơn trăm tuổi lộng gió sông mát lành. Quán thiết kế theo lối vintage hoài cổ với bàn ghế gỗ mộc, võng đung đưa râm mát. Thức uống đặc trưng ở đây là nước dừa xiêm ngọt lịm vừa hái trực tiếp từ trên cây, nước ép dứa tươi mát và cà phê muối thơm béo đậm đà.',
    amenities: ['Không gian bóng mát dừa cổ thụ', 'Nước dừa xiêm hái tại cây', 'Wifi cực mạnh', 'Nhiều góc chụp ảnh hoài cổ', 'Gió mát tự nhiên cực dễ chịu', 'Võng nằm nghỉ trưa mát rượi'],
    rating: 4.8,
    reviewsCount: 18,
    featured: true
  },
  {
    id: 'di-4',
    name: 'Quán Hải Sản Biển Đông - Bãi Nồm',
    category: 'dining',
    subCategory: 'Quán hải sản',
    image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=800&q=80',
    address: 'Khu ẩm thực Bãi Nồm, xã đảo Tam Hải, Quảng Nam',
    priceRange: '80.000đ - 250.000đ / món',
    phone: '0911333444',
    zalo: 'https://zalo.me/0911333444',
    mapUrl: 'https://maps.google.com/maps?q=Bãi+Nồm,+Tam+Hải,+Núi+Thành,+Quảng+Nam&t=&z=14&ie=UTF8&iwloc=&output=embed',
    description: 'Nằm ngay cạnh bãi tắm lộng gió ở Bãi Nồm, quán Hải Sản Biển Đông thích hợp cho những ai vừa tắm biển mát lạnh xong muốn ghé ngay ăn nhẹ hoặc tổ chức tiệc nhậu hải sản lúc chiều tà. Quán nổi tiếng với món ốc vú nàng hấp sả, mực một nắng nướng muối ớt cay xè và lẩu cá rạn ngọt lịm từ nước dùng xương cá nấu măng chua.',
    amenities: ['Gần sát bãi tắm biển', 'Ốc vú nàng hấp sả đặc sản', 'Phục vụ nước dừa tắm biển xong', 'Nơi ngắm hoàng hôn bãi biển lý tưởng', 'Nhận làm BBQ trọn gói bờ biển'],
    rating: 4.7,
    reviewsCount: 20
  },

  // DI CHUYỂN & TRẢI NGHIỆM (transport)
  {
    id: 'tr-1',
    name: 'Dịch vụ Cano Du Lịch Chú Sáu',
    category: 'transport',
    subCategory: 'Thuê tàu/Cano',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80',
    address: 'Bến phà Tam Hải hoặc Bến đò thôn 1, xã đảo Tam Hải',
    priceRange: '400.000đ - 1.200.000đ / chuyến khứ hồi (Cano chở tối đa 12 người)',
    phone: '0905999000',
    zalo: 'https://zalo.me/0905999000',
    mapUrl: 'https://maps.google.com/maps?q=Bến+phà+Tam+Hải,+Quảng+Nam&t=&z=14&ie=UTF8&iwloc=&output=embed',
    description: 'Chú Sáu là một trong những chủ cano đầu tiên và uy tín nhất tại Tam Hải. Dịch vụ chuyên chở du khách ra khơi khám phá đảo hoang sơ Hòn Mang, Hòn Dứa lộng lẫy, dừng chân tắm biển, lặn biển ngắm san hô bãi cạn rực rỡ sắc màu. Cano đời mới đạt chuẩn an toàn hàng hải, trang bị đầy đủ phao cứu sinh chất lượng cao.',
    amenities: ['Cano cao tốc chuẩn an toàn', 'Đầy đủ áo phao & kính lặn san hô', 'Lái cano kinh nghiệm, nhiệt tình', 'Hỗ trợ neo đậu ăn uống ở hoang đảo', 'Chụp ảnh dưới nước bằng điện thoại chống nước'],
    rating: 4.9,
    reviewsCount: 28,
    featured: true
  },
  {
    id: 'tr-2',
    name: 'Cho Thuê Xe Máy Tam Hải - Chị Hoa',
    category: 'transport',
    subCategory: 'Thuê xe máy',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80',
    address: 'Giao nhận xe ngay tại Bến phà Tam Hải (Phía bên đảo)',
    priceRange: '100.000đ - 120.000đ / ngày (Kèm xăng & 2 mũ bảo hiểm)',
    phone: '0989444555',
    zalo: 'https://zalo.me/0989444555',
    mapUrl: 'https://maps.google.com/maps?q=Bến+phà+Tam+Hải,+Quảng+Nam&t=&z=14&ie=UTF8&iwloc=&output=embed',
    description: 'Muốn khám phá trọn vẹn từng ngóc ngách, con đường rợp mát dừa của Tam Hải thì xe máy là phương tiện tối ưu nhất. Cơ sở Chị Hoa cung cấp các loại xe số (Wave, Sirius) và xe ga (Vision, AirBlade) đời mới, máy móc êm ái, phanh đĩa an toàn. Khách du lịch chỉ cần gọi điện trước, chị sẽ dắt xe chờ sẵn ngay khi phà vừa cập bến đảo.',
    amenities: ['Giao xe nhanh tận nơi bến phà', 'Xăng đã đổ sẵn đủ đi quanh đảo', '2 mũ bảo hiểm sạch sẽ', 'Thủ tục nhanh gọn (chỉ cần chụp CCCD)', 'Hỗ trợ cứu hộ xe nhanh chóng nếu gặp sự cố'],
    rating: 4.7,
    reviewsCount: 11
  },
  {
    id: 'tr-3',
    name: 'Tour Bản Địa Anh Khoa',
    category: 'transport',
    subCategory: 'Tour bản địa',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    address: 'Văn phòng hướng dẫn tại Homestay Lagoon, Thôn 1, Tam Hải',
    priceRange: '350.000đ - 500.000đ / người (Tour trọn gói bao gồm ăn trưa)',
    phone: '0932777666',
    zalo: 'https://zalo.me/0932777666',
    mapUrl: 'https://maps.google.com/maps?q=Ghềnh+đá+Bàn+Than,+Tam+Hải&t=&z=14&ie=UTF8&iwloc=&output=embed',
    description: 'Khám phá xã đảo dưới góc nhìn của một người con sinh ra và lớn lên tại Tam Hải. Tour Bản Địa Anh Khoa đưa bạn qua những cung đường thơ mộng bậc nhất, trải nghiệm chèo thuyền thúng len lỏi trong rừng dừa nước kỳ thú, lắng nghe truyền thuyết ghềnh đá Bàn Than đen huyền bí, vượt cano sang đảo Hòn Mang cắm trại dã ngoại và thưởng thức bữa tiệc cá nướng rạn đại dương.',
    amenities: ['Hướng dẫn viên bản địa am hiểu', 'Vé tàu cano di chuyển đảo Hòn Mang', 'Vé chèo thuyền thúng rừng dừa', 'Bữa ăn trưa hải sản tươi phong phú', 'Chụp ảnh lưu niệm miễn phí', 'Hỗ trợ thiết kế tour riêng theo nhu cầu'],
    rating: 4.9,
    reviewsCount: 31,
    featured: true
  },
  {
    id: 'tr-4',
    name: 'Trải Nghiệm Cano Câu Cá Đêm - Thuyền trưởng Danh',
    category: 'transport',
    subCategory: 'Tour bản địa',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
    address: 'Bến đò neo đậu tàu cá xã Tam Hải, Núi Thành, Quảng Nam',
    priceRange: '800.000đ - 1.500.000đ / đoàn 4-6 người (Câu mực đêm)',
    phone: '0905444888',
    zalo: 'https://zalo.me/0905444888',
    mapUrl: 'https://maps.google.com/maps?q=Tam+Hải,+Núi+Thành,+Quảng+Nam&t=&z=14&ie=UTF8&iwloc=&output=embed',
    description: 'Một hoạt động cực kỳ lý thú về đêm khi lưu trú trên đảo Tam Hải. Đồng hành cùng thuyền trưởng Danh - lão ngư kỳ cựu của đảo, du khách sẽ được lênh đênh trên biển rạn đêm, tự tay thả mồi câu mực óng ánh dưới ánh đèn cao áp, hoặc câu các loại cá mú, cá hồng đá. Chiến lợi phẩm thu được sẽ được chế biến hấp hành hoặc nấu cháo nóng ngay trên boong tàu lộng gió biển đêm.',
    amenities: ['Trang bị sẵn cần câu & mồi chuyên nghiệp', 'Bảo hiểm đường thủy du khách', 'Cháo mực nóng hổi nấu trên tàu cá', 'Thuyền trưởng dặn dò an toàn kỹ lưỡng', 'Tặng lại toàn bộ cá câu được cho khách mang về'],
    rating: 4.8,
    reviewsCount: 16
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 're-1',
    listingId: 'ac-1',
    author: 'Nguyễn Văn Hải (Hà Nội)',
    rating: 5,
    content: 'Homestay siêu mát, sân vườn cực kỳ rộng rãi dưới bóng mát rặng dừa cổ thụ. Anh chị chủ nhà thân thiện vô cùng, hướng dẫn tận tình cách ra đảo ghé bãi đá. Chiều chiều mượn xe đạp chạy quanh bến đò rất yên bình. Sẽ quay lại!',
    date: '2026-06-25'
  },
  {
    id: 're-2',
    listingId: 'ac-1',
    author: 'Trần Thị Minh Anh (Đà Nẵng)',
    rating: 4,
    content: 'Phòng sạch sẽ, không gian thoáng đãng. Thích nhất là được ngồi hóng gió mát bờ kè ngay đối diện homestay, ngắm tàu bè cá đánh cá chạy xuôi dòng. Một điểm trừ nhỏ là điều hòa hơi mát chậm vào buổi trưa nóng nực nhưng tổng quan cực tốt.',
    date: '2026-06-18'
  },
  {
    id: 're-3',
    listingId: 'ac-2',
    author: 'Phạm Minh Đức (TP. HCM)',
    rating: 5,
    content: 'Trải nghiệm Glamping bên bờ biển Bãi Nồm quá đã! Buổi tối đốt lửa trại nướng hải sản cực thơm ngon, tiếng sóng vỗ rì rào ngủ rất sâu. Sáng dậy mở lều ra thấy ngay bình minh biển Tam Hải đỏ rực rỡ, cảm giác thanh lọc tâm hồn cực kỳ đáng giá.',
    date: '2026-07-01'
  },
  {
    id: 're-4',
    listingId: 'di-1',
    author: 'Lê Thanh Thảo (Quảng Nam)',
    rating: 5,
    content: 'Hải sản ở đây bao tươi, mực lá hấp hành ngọt béo giòn sần sật, ghẹ rang muối ớt đậm đà ngon tuyệt đỉnh. Quán sát mép nước biển cực mát mẻ không cần quạt luôn. Giá cả niêm yết rõ ràng theo cân nặng nên không sợ bị chặt chém như các điểm du lịch khác.',
    date: '2026-06-28'
  },
  {
    id: 're-5',
    listingId: 'tr-1',
    author: 'Vũ Hoàng Nam (Bình Dương)',
    rating: 5,
    content: 'Chú Sáu lái cano cực vui tính và lái rất đầm, an tâm tuyệt đối. Chú dẫn cả đoàn sang đảo Hòn Dứa hoang sơ tuyệt đẹp, trang bị kính lặn ngắm san hô bãi cạn rực rỡ. Nước biển ở đây trong vắt nhìn sâu tận đáy cát, rất đáng trải nghiệm cano này!',
    date: '2026-07-04'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Cẩm nang đi Phà ra đảo Tam Hải chi tiết, chính xác nhất',
    summary: 'Tổng hợp thời gian hoạt động, lịch chạy phà Tam Quang - Kỳ Hà ra đảo Tam Hải và bảng giá cập nhật mới nhất cho khách du lịch tự túc.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    author: 'Ban quản trị Du lịch Tam Hải',
    date: '2026-06-15',
    readTime: '4 phút đọc',
    tags: ['Di chuyển', 'Cần biết'],
    content: `Để đến với xã đảo Tam Hải xinh đẹp, phương tiện di chuyển phổ biến và duy nhất là Phà (hoặc đò nhỏ đối với khách đi bộ). Dưới đây là thông tin chi tiết giúp bạn hành trình suôn sẻ:

### 1. Bến Phà Tam Quang (Bến Phà chính):
- **Vị trí**: Nối liền xã Tam Quang và xã đảo Tam Hải (Núi Thành, Quảng Nam).
- **Lịch chạy**: Phà hoạt động liên tục hàng ngày từ **05:00 sáng đến 19:00 tối**. Tần suất trung bình khoảng 15-30 phút/chuyến tùy thuộc vào lưu lượng phương tiện. Vào giờ cao điểm hoặc ngày cuối tuần, phà sẽ xuất bến ngay khi đầy tải mà không cần đợi giờ.
- **Giá vé tham khảo**:
  - Người đi bộ: Miễn phí hoặc 2.000đ/lượt.
  - Xe máy/Xe đạp điện: 5.000đ/lượt (Đã bao gồm người lái).
  - Ô tô dưới 9 chỗ: Khoảng 30.000đ - 45.000đ/lượt (Lưu ý: Một số phà nhỏ chỉ chở được tối đa 1-2 ô tô, bạn nên hỏi trước nhân viên bến phà).

### 2. Bến Đò Tam Giang (Bến đò dân sinh):
- **Vị trí**: Nối xã Tam Giang và Thôn 1 Tam Hải. Đây chủ yếu là các đò vỏ gỗ nhỏ của người dân, chỉ phục vụ chở người đi bộ và xe máy.
- **Lịch chạy**: Chạy linh hoạt theo khách, từ **05:30 sáng đến 18:30 chiều**.
- **Giá vé**: 5.000đ - 10.000đ/người kèm xe máy.

### Một số lưu ý quan trọng:
- Vào mùa mưa bão (khoảng tháng 10 đến tháng 12), phà có thể tạm dừng hoạt động đột xuất để đảm bảo an toàn nếu biển động dữ dội hoặc gió giật mạnh.
- Chuyến phà cuối cùng trong ngày xuất phát lúc **19:00**, vì vậy bạn hãy sắp xếp thời gian có mặt trước giờ này để tránh bị kẹt lại bờ đối diện.`
  },
  {
    id: 'post-2',
    title: 'Gợi ý lịch trình 2 ngày 1 đêm "ăn chơi quên lối về" trên đảo',
    summary: 'Trải nghiệm kỳ nghỉ cuối tuần hoàn hảo: Check-in Ghềnh Bàn Than hoang sơ, chèo thuyền thúng rừng dừa, lặn ngắm san hô Hòn Dứa và tiệc BBQ hải sản.',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80',
    author: 'Blogger du hí Việt Nam',
    date: '2026-06-20',
    readTime: '6 phút đọc',
    tags: ['Lịch trình', 'Trải nghiệm'],
    content: `Đảo Tam Hải bình yên, mộc mạc và hoang sơ luôn là điểm trốn nóng tuyệt vời. Để trải nghiệm trọn vẹn vẻ đẹp của đảo, một lịch trình 2 ngày 1 đêm là vô cùng lý tưởng. Hãy cùng tham khảo lịch trình chi tiết sau nhé:

### NGÀY 1: CẬP BẾN XÃ ĐẢO - CHECK-IN BÀN THAN - CẮM TRẠI BÃI NỒM
- **08:30**: Bắt phà tại bến Tam Quang sang đảo. Nhận xe máy đã thuê trước tại bến phà, di chuyển về homestay gửi hành lý.
- **09:30**: Check-in địa điểm kỳ vĩ nhất đảo - **Ghềnh đá Bàn Than**. Tại đây, những dải đá đen xếp chồng xếp lớp, bóng loáng như than, tương phản mạnh mẽ với màu xanh ngọc bích của sóng biển tạo nên những bức ảnh vô cùng độc đáo. Ghé qua Giếng Cổ nghìn năm tuổi gần đó.
- **11:30**: Ăn trưa cơm phần hải sản tại Quán Cô Út gần chợ.
- **14:00**: Đi cano của Chú Sáu ra **Đảo Hòn Dứa** và **Hòn Mang**. Tự do tắm biển, lặn ngắm san hô tự nhiên ngay dưới làn nước trong vắt.
- **17:00**: Trở lại bãi biển Bãi Nồm nhận lều cắm trại tại Gió Biển Camping. Ngắm hoàng hôn buông lơi đỏ rực phía sau rặng dừa thơ mộng.
- **19:00**: Thưởng thức tiệc BBQ hải sản nướng mộc ngoài bãi biển, đốt lửa trại bập bùng hát hò dưới trời sao lộng gió.

### NGÀY 2: BÌNH MINH BÃI NỒM - CHÈO SUP RỪNG DỪA NƯỚC - MUA QUÀ LƯU NIỆM
- **05:00**: Thức dậy sớm đón những tia nắng bình minh đầu tiên rọi chiếu bãi cát vàng Bãi Nồm. Biển sáng sớm yên bình, mát lạnh vô ngần.
- **07:00**: Ăn sáng Mì Quảng đặc trưng thơm ngon tại chợ địa phương. Thưởng thức ly cafe dừa xiêm béo mát tại Dừa Cafe.
- **08:30**: Di chuyển đến rừng dừa nước thôn 1, trải nghiệm chèo thuyền thúng hoặc chèo SUP lách qua các lạch dừa xanh mướt, nghe kể chuyện lịch sử hào hùng xứ đảo.
- **11:00**: Trả phòng homestay, ghé chợ mua hải sản khô hoặc mực một nắng làm quà lưu niệm cho người thân.
- **12:00**: Lên phà trở về đất liền, kết thúc chuyến đi đầy ắp kỷ niệm đẹp tại đảo Tam Hải bình yên.`
  },
  {
    id: 'post-3',
    title: 'Ghềnh đá Bàn Than - "Vết cắt thời gian triệu năm" giữa trùng khơi',
    summary: 'Chiêm ngưỡng kiệt tác thiên nhiên đen tuyền, những vách đá trầm tích kỳ vĩ uốn lượn bên bờ sóng rầm rì tại đảo Tam Hải.',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
    author: 'Trần Minh Phú (Hội địa lý miền Trung)',
    date: '2026-07-02',
    readTime: '3 phút đọc',
    tags: ['Địa danh', 'Khám phá'],
    content: `Cách thành phố Tam Kỳ khoảng 40km về hướng Đông Nam, Ghềnh đá Bàn Than ở đảo Tam Hải được ví như "Lý Sơn thu nhỏ" hay "báu vật đen trầm tích" của tỉnh Quảng Nam. Điểm đặc sắc tạo nên sự mê hoặc của địa danh này chính là những vách đá đen bóng có cấu trúc trầm tích xếp tầng cực kỳ ngoạn mục.

### 1. Nguồn gốc địa chất thú vị:
Theo nghiên cứu khoa học, ghềnh đá Bàn Than có niên đại địa chất hàng triệu năm tuổi. Trải qua quá trình kiến tạo thềm lục địa dài dằng dặc cùng sự xâm thực không ngừng của sóng biển và gió đại dương, những tảng đá mácma, đá trầm tích bùn sét đã biến đổi và hình thành nên những vết cắt sắc sảo, uốn lượn mềm mại như được chạm khắc tỉ mỉ bởi bàn tay tạo hóa.

### 2. Những góc chụp ảnh "không thể bỏ lỡ":
- **Ông Đụn, Bà Thanh**: Hai khối đá lớn hiên ngang vươn ra biển khơi như một biểu tượng của lòng thủy chung sắt son trước sóng gió bão bùng.
- **Cổng Tò Vò phiên bản đá đen**: Góc chụp xuyên qua khe đá tự nhiên mở ra khoảng trời và mặt biển xanh ngắt.
- **Hốc đá muối tự nhiên**: Nơi nước biển đọng lại trong các hõm đá nhỏ gặp nắng gắt kết tinh thành muối trắng phau lấp lánh như pha lê.

### Lưu ý an toàn khi check-in Ghềnh đá:
- Vách đá có nhiều mỏm trơn trượt do rong rêu bám phủ, bạn nên đi giày thể thao có độ bám tốt, tránh đi dép lê trơn.
- Tránh đứng sát mép đá nơi có sóng lớn bất thình lình vỗ mạnh dâng cao nguy hiểm.`
  }
];

export const EMERGENCY_CONTACTS: EmergencyContact[] = [
  { name: 'Trạm Y Tế Xã Đảo Tam Hải', phone: '02353871115', role: 'Cấp cứu & Chăm sóc y tế' },
  { name: 'Công An Xã Đảo Tam Hải', phone: '02353871113', role: 'An ninh trật tự đảo' },
  { name: 'Hotline Bến Phà Tam Quang', phone: '0905987112', role: 'Thông tin lịch trình, sự cố phà' },
  { name: 'Đại diện Đội Cano Cứu Hộ Đảo', phone: '0912345001', role: 'Cứu hộ đường thủy, sự cố biển' }
];
