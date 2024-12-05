const ExcelJS = require('exceljs');

async function reportSnAllMtiH1(allsnmtih1s) {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('All SN MT1 H-1');

worksheet.columns = [
    { header: 'Kode KB', key: 'kode_kb', width: 20 },
    { header: 'Kode Barang Keluar', key: 'kode_brng_keluar', width: 20 },
    { header: 'Kode TF', key: 'kode_tf', width: 15 },
    { header: 'Mesin ID', key: 'mesin_id', width: 15 },
    { header: 'Vendor Name', key: 'vendor_name', width: 30 },
    { header: 'Service Point', key: 'service_point', width: 20 },
    { header: 'Nama Produk', key: 'nama_produk', width: 30 },
    { header: 'Serial Number', key: 'sn', width: 20 },
    { header: 'TID', key: 'tid', width: 20 },
    { header: 'Kondisi Mesin', key: 'kondisi_mesin', width: 20 },
    { header: 'Lokasi', key: 'lokasi', width: 20 },
    { header: 'Keterangan', key: 'keterangan', width: 30 },
    { header: 'Vendor ID', key: 'vendor_id', width: 20 },
    { header: 'Service Point ID', key: 'service_point_id', width: 20 },
    { header: 'Nama Kondisi', key: 'nama_kondisi', width: 20 },
    { header: 'Lokasi Mesin', key: 'lokasi_mesin', width: 20 },
    { header: 'Lokasi Nama', key: 'lokasi_nama', width: 20 },
    { header: 'Status Mesin', key: 'status_mesin', width: 20 },
    { header: 'Alokasi Nama', key: 'alokasi_nama', width: 20 },
    { header: 'ID Alokasi', key: 'id_alokasi', width: 20 },
    { header: 'Scheduled Used', key: 'sched_used', width: 20 },
    { header: 'Nama Kategori', key: 'nama_kategori', width: 20 },
    { header: 'Keterangan Uni Stock', key: 'keterangan_uni_stock', width: 30 },
    { header: 'Status Uni Stock', key: 'status_uni_stock', width: 20 },
    { header: 'Nama Teknisi', key: 'teknisi', width: 20 },
];

allsnmtih1s.forEach(allsnmtih1 => {
    worksheet.addRow({
        kode_kb: allsnmtih1.kode_kb,
        kode_brng_keluar: allsnmtih1.kode_brng_keluar,
        kode_tf: allsnmtih1.kode_tf,
        mesin_id: allsnmtih1.mesin_id,
        vendor_name: allsnmtih1.vendor_name,
        service_point: allsnmtih1.service_point,
        nama_produk: allsnmtih1.nama_produk,
        sn: allsnmtih1.sn,
        tid: allsnmtih1.tid,
        kondisi_mesin: allsnmtih1.kondisi_mesin,
        lokasi: allsnmtih1.lokasi,
        keterangan: allsnmtih1.keterangan,
        vendor_id: allsnmtih1.vendor_id,
        service_point_id: allsnmtih1.service_point_id,
        nama_kondisi: allsnmtih1.nama_kondisi,
        lokasi_mesin: allsnmtih1.lokasi_mesin,
        lokasi_nama: allsnmtih1.lokasi_nama,
        status_mesin: allsnmtih1.status_mesin,
        alokasi_nama: allsnmtih1.alokasi_nama,
        id_alokasi: allsnmtih1.id_alokasi,
        sched_used: allsnmtih1.sched_used,
        nama_kategori: allsnmtih1.nama_kategori,
        keterangan_uni_stock: allsnmtih1.keterangan_uni_stock,
        status_uni_stock: allsnmtih1.status_uni_stock,
        teknisi: allsnmtih1.teknisi
    });
});

return await workbook.xlsx.writeBuffer();
 
}

async function reportAllSn(allsn) {
    
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('All SN Periode 1 Tahun');

        worksheet.columns = [
            { header: 'Kode KB', key: 'kode_kb', width: 20 },
            { header: 'Kode Barang Keluar', key: 'kode_brng_keluar', width: 20 },
            { header: 'Kode TF', key: 'kode_tf', width: 15 },
            { header: 'Vendor Name', key: 'vendor_name', width: 30 },
            { header: 'Service Point', key: 'service_point', width: 20 },
            { header: 'Nama Produk', key: 'nama_produk', width: 30 },
            { header: 'Serial Number', key: 'sn', width: 20 },
            { header: 'TID', key: 'tid', width: 20 }
        ];
    

        allsn.forEach(allsn1 => {
            worksheet.addRow({
                kode_kb: allsn1.kode_kb,
                kode_brng_keluar: allsn1.kode_brng_keluar,
                kode_tf: allsn1.kode_tf,
                vendor_name: allsn1.vendor_name,
                service_point: allsn1.service_point,
                nama_produk: allsn1.nama_produk,
                sn: allsn1.sn,
                tid: allsn1.tid
            });
        });

    return await workbook.xlsx.writeBuffer();
        
}


async function reportSn(sllsn) {
    
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('All SN');

        worksheet.columns = [
            { header: 'Nama Vendor', key: 'vendor_name', width: 20 },
            { header: 'Service Point', key: 'service_point', width: 20 },
            { header: 'Nama Produk', key: 'nama_produk', width: 15 },
            { header: 'No Sn', key: 'sn', width: 30 },
            { header: 'Lokasi', key: 'alokasi_nama', width: 20 },
            { header: 'Kondisi', key: 'nama_kondisi', width: 30 },
            { header: 'Status Mesin', key: 'status_mesin', width: 20 },
            { header: 'lokasi mesin', key: 'lokasi_mesin', width: 20 },

            { header: 'Uni Stock', key: 'keterangan_uni_stock', width: 20 },
            { header: 'TID', key: 'tid', width: 20 },
            { header: 'Kode kb', key: 'kode_kb', width: 20 },
            { header: 'kode barang keluar', key: 'kode_brng_keluar', width: 20 },
            { header: 'kode transfer', key : 'kode_tf', width: 20 },
            { header: 'Nama Teknisi', key: 'teknisi', width: 20 },
            { header: 'Compare Maas', key: 'hasil_compare_sn_maas', width: 20 },
            { header: 'Keterangan Maas', key: 'ket_hasil_compare_sn_maas', width: 20 },
            { header: 'Sn Full', key: 'sn_full', width: 20 },
            { header: 'SN Maas', key: 'sn_maas', width: 20 },
            { header: 'lokasi mesin', key: 'character_count', width: 20 },
        ];
    

        sllsn.forEach(allsn1 => {
            worksheet.addRow({
                vendor_name: allsn1.vendor_name,
                service_point: allsn1.service_point,
                nama_produk: allsn1.nama_produk,
                sn: allsn1.sn,
                alokasi_nama: allsn1.alokasi_nama,
                nama_kondisi: allsn1.nama_kondisi,
                status_mesin: allsn1.status_mesin,
                lokasi_mesin: allsn1.lokasi_mesin,
                keterangan_uni_stock: allsn1.keterangan_uni_stock,
                tid: allsn1.tid,
                kode_kb: allsn1.kode_kb,
                kode_brng_keluar: allsn1.kode_brng_keluar,
                kode_tf: allsn1.kode_tf,
                teknisi: allsn1.teknisi,
                hasil_compare_sn_maas: allsn1.hasil_compare_sn_maas,
                ket_hasil_compare_sn_maas: allsn1.ket_hasil_compare_sn_maas,
                sn_full: allsn1.sn_full,
                sn_maas: allsn1.sn_maas,
                character_count: allsn1.character_count
            });
        });        

    return await workbook.xlsx.writeBuffer();
        
}


async function reportJO(slljo) {
    
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('All JO');

    worksheet.columns = [
        { header: 'Main MID', key: 'main_mid', width: 20 },
        { header: 'Main TID', key: 'main_tid', width: 20 },
        { header: 'Nama Merchant', key: 'main_nama_merchant', width: 30 },
        { header: 'Service Point', key: 'service_point', width: 20 },
        { header: 'Short Merchant', key: 'main_short_merchant', width: 30 },
        { header: 'Alamat', key: 'main_alamat', width: 30 },
        { header: 'Kota', key: 'main_kota', width: 20 },
        { header: 'Kanwil', key: 'main_kanwil', width: 20 },
        { header: 'Status', key: 'nama_status', width: 15 },
        { header: 'Time Finish', key: 'time_finish', width: 20 },
        { header: 'PIC', key: 'main_pic', width: 20 },
        { header: 'Phone', key: 'main_phone', width: 20 },
        { header: 'SN', key: 'main_sn', width: 30 },
        { header: 'ICCID', key: 'main_iccid', width: 30 },
        { header: 'Conn Type', key: 'main_conn_type', width: 20 },
        { header: 'Jenis EDC', key: 'main_jenis_edc', width: 20 },
        { header: 'Kondisi EDC', key: 'sched_kondisi_edc', width: 30 },
        { header: 'Kondisi Dongle', key: 'sched_kondisi_dongle', width: 30 },
        { header: 'Kepuasan Merchant', key: 'sched_kepuasan_merchant', width: 30 },
        { header: 'Alasan Merchant Tidak Puas', key: 'sched_alasan_merchant_tdk_puas', width: 50 },
        { header: 'Request Merchant', key: 'sched_request_merchant', width: 30 },
        { header: 'EDC Adaptor', key: 'sched_edc_adaptor', width: 30 },
        { header: 'Kondisi Comm Network', key: 'sched_kondisi_commnetwork', width: 30 },
        { header: 'Problem Nonteknisi EDC', key: 'sched_problem_nonteknisi_edc', width: 40 },
        { header: 'Indikasi Gesek Tunai', key: 'sched_indikasi_gesek_tunai', width: 30 },
        { header: 'Kategori', key: 'kategori', width: 20 },
        { header: 'Sub Kategori', key: 'sub_kategori', width: 30 },
        { header: 'Remarks', key: 'Remarks', width: 30 },
        { header: 'Reason', key: 'Reason', width: 30 },
        { header: 'Status Kunjungan', key: 'Status_Kunjungan', width: 30 },
        { header: 'Versi EDC', key: 'main_versi_edc', width: 20 },
        { header: 'M PIC Merchant', key: 'sched_m_pic_merchant', width: 30 },
        { header: 'M PIC Telp', key: 'sched_m_pic_telp', width: 20 },
        { header: 'EDC Bank Lain', key: 'sched_edc_bank_lain', width: 30 },
        { header: 'WO Digital', key: 'wo_digital', width: 30 },
        { header: 'Assigned Teknisi', key: 'Assigned_Teknisi', width: 30 },
        { header: 'Scan SN Utama', key: 'scan_sn_utama', width: 30 },
        { header: 'SIM Card', key: 'sched_sim_card', width: 20 },
        { header: 'SAM', key: 'sched_sam', width: 20 },
        { header: 'Jenis Job', key: 'service_point', width: 20 },
        { header: 'Status', key: 'Jenis Job', width: 15 },
        { header: 'Case ID / Case ID Vendor', key: 'Status', width: 30 },
        { header: 'Tanggal Jam Terima JO', key: 'Case_ID', width: 30 },
        { header: 'Tanggal Upload', key: 'tgl_upload', width: 30 },
        { header: 'Time Start', key: 'time_start', width: 20 },
        { header: 'SLA Hari', key: 'SLA_Hari', width: 20 },
        { header: 'SLA Jam', key: 'SLA_Jam', width: 20 },
        { header: 'Status SLA', key: 'status_sla', width: 30 },
        { header: 'Catatan SLA', key: 'catatan_keterangan_sla', width: 30 },
        { header: 'Base Kantor Service Point', key: 'Base_Kantor_Service_Point', width: 30 },
        { header: 'Histori Teknisi Per Kunjungan', key: 'Histori_Keterangan_Teknisi_Perkunjungan', width: 50 },
        { header: 'Link Per Kunjungan', key: 'Link_per_Kunjungan', width: 40 },
        { header: 'Status QC', key: 'status_qc', width: 20 },
        { header: 'Jumlah Faktur', key: 'Jumlah_Faktur', width: 20 },
        { header: 'Main MID B', key: 'main_mid_b', width: 20 },
        { header: 'Main TID B', key: 'main_tid_b', width: 20 },
        { header: 'Latitude Finish', key: 'lat_finish', width: 20 },
        { header: 'Longitude Finish', key: 'long_finish', width: 20 },
        { header: 'Case ID Vendor', key: 'case_id_vendor', width: 30 },
        { header: 'Case ID MTI', key: 'case_id_mti', width: 30 }
    ];
    


    slljo.forEach(allsn1 => {
        worksheet.addRow({
            main_mid: allsn1.main_mid,
            main_tid: allsn1.main_tid,
            main_nama_merchant: allsn1.main_nama_merchant,
            service_point: allsn1.service_point,
            main_short_merchant: allsn1.main_short_merchant,
            main_alamat: allsn1.main_alamat,
            main_kota: allsn1.main_kota,
            main_kanwil: allsn1.main_kanwil,
            nama_status: allsn1.nama_status,
            time_finish: allsn1.time_finish,
            main_pic: allsn1.main_pic,
            main_phone: allsn1.main_phone,
            main_sn: allsn1.main_sn,
            main_iccid: allsn1.main_iccid,
            main_conn_type: allsn1.main_conn_type,
            main_jenis_edc: allsn1.main_jenis_edc,
            sched_kondisi_edc: allsn1.sched_kondisi_edc,
            sched_kondisi_dongle: allsn1.sched_kondisi_dongle,
            sched_kepuasan_merchant: allsn1.sched_kepuasan_merchant,
            sched_alasan_merchant_tdk_puas: allsn1.sched_alasan_merchant_tdk_puas,
            sched_request_merchant: allsn1.sched_request_merchant,
            sched_edc_adaptor: allsn1.sched_edc_adaptor,
            sched_kondisi_commnetwork: allsn1.sched_kondisi_commnetwork,
            sched_problem_nonteknisi_edc: allsn1.sched_problem_nonteknisi_edc,
            sched_indikasi_gesek_tunai: allsn1.sched_indikasi_gesek_tunai,
            kategori: allsn1.kategori,
            sub_kategori: allsn1.sub_kategori,
            Remarks: allsn1.Remarks,
            Reason: allsn1.Reason,
            Status_Kunjungan: allsn1.Status_Kunjungan,
            main_versi_edc: allsn1.main_versi_edc,
            sched_m_pic_merchant: allsn1.sched_m_pic_merchant,
            sched_m_pic_telp: allsn1.sched_m_pic_telp,
            sched_edc_bank_lain: allsn1.sched_edc_bank_lain,
            wo_digital: allsn1.wo_digital,
            Assigned_Teknisi: allsn1.Assigned_Teknisi,
            scan_sn_utama: allsn1.scan_sn_utama,
            sched_sim_card: allsn1.sched_sim_card,
            sched_sam: allsn1.sched_sam,
            jenis_job: allsn1.jenis_job,
            Status: allsn1.Status,
            case_id_vendor: allsn1.case_id_vendor,
            Tanggal_Jam_Terima_JO: allsn1.Tanggal_Jam_Terima_JO,
            tgl_upload: allsn1.tgl_upload,
            time_start: allsn1.time_start,
            SLA_Hari: allsn1.SLA_Hari,
            SLA_Jam: allsn1.SLA_Jam,
            status_sla: allsn1.status_sla,
            catatan_keterangan_sla: allsn1.catatan_keterangan_sla,
            Base_Kantor_Service_Point: allsn1.Base_Kantor_Service_Point,
            Histori_Keterangan_Teknisi_Perkunjungan: allsn1.Histori_Keterangan_Teknisi_Perkunjungan,
            Link_per_Kunjungan: allsn1.Link_per_Kunjungan,
            status_qc: allsn1.status_qc,
            Jumlah_Faktur: allsn1.Jumlah_Faktur,
            main_mid_b: allsn1.main_mid_b,
            main_tid_b: allsn1.main_tid_b,
            lat_finish: allsn1.lat_finish,
            long_finish: allsn1.long_finish,
            case_id_mti: allsn1.case_id_mti
        });
    });           

    return await workbook.xlsx.writeBuffer();
        
}


async function reportJOActive(slljo) {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('All JO');

    worksheet.columns = [
        { header: 'Main MID', key: 'main_mid', width: 20 },
        { header: 'Main TID', key: 'main_tid', width: 20 },
        { header: 'Nama Merchant', key: 'main_nama_merchant', width: 30 },
        { header: 'Service Point', key: 'service_point', width: 20 },
        { header: 'Short Merchant', key: 'main_short_merchant', width: 30 },
        { header: 'Alamat', key: 'main_alamat', width: 30 },
        { header: 'Kota', key: 'main_kota', width: 20 },
        { header: 'Kanwil', key: 'main_kanwil', width: 20 },
        { header: 'Status', key: 'nama_status', width: 15 },
        { header: 'Time Finish', key: 'time_finish', width: 20 },
        { header: 'PIC', key: 'main_pic', width: 20 },
        { header: 'Phone', key: 'main_phone', width: 20 },
        { header: 'SN', key: 'main_sn', width: 30 },
        { header: 'ICCID', key: 'main_iccid', width: 30 },
        { header: 'Conn Type', key: 'main_conn_type', width: 20 },
        { header: 'Jenis EDC', key: 'main_jenis_edc', width: 20 },
        { header: 'Kondisi EDC', key: 'sched_kondisi_edc', width: 30 },
        { header: 'Kondisi Dongle', key: 'sched_kondisi_dongle', width: 30 },
        { header: 'Kepuasan Merchant', key: 'sched_kepuasan_merchant', width: 30 },
        { header: 'Alasan Merchant Tidak Puas', key: 'sched_alasan_merchant_tdk_puas', width: 50 },
        { header: 'Request Merchant', key: 'sched_request_merchant', width: 30 },
        { header: 'EDC Adaptor', key: 'sched_edc_adaptor', width: 30 },
        { header: 'Kondisi Comm Network', key: 'sched_kondisi_commnetwork', width: 30 },
        { header: 'Problem Nonteknisi EDC', key: 'sched_problem_nonteknisi_edc', width: 40 },
        { header: 'Indikasi Gesek Tunai', key: 'sched_indikasi_gesek_tunai', width: 30 },
        { header: 'Kategori', key: 'kategori', width: 20 },
        { header: 'Sub Kategori', key: 'sub_kategori', width: 30 },
        { header: 'Remarks', key: 'Remarks', width: 30 },
        { header: 'Reason', key: 'Reason', width: 30 },
        { header: 'Status Kunjungan', key: 'Status_Kunjungan', width: 30 },
        { header: 'Versi EDC', key: 'main_versi_edc', width: 20 },
        { header: 'M PIC Merchant', key: 'sched_m_pic_merchant', width: 30 },
        { header: 'M PIC Telp', key: 'sched_m_pic_telp', width: 20 },
        { header: 'EDC Bank Lain', key: 'sched_edc_bank_lain', width: 30 },
        { header: 'WO Digital', key: 'wo_digital', width: 30 },
        { header: 'Assigned Teknisi', key: 'Assigned_Teknisi', width: 30 },
        { header: 'Scan SN Utama', key: 'scan_sn_utama', width: 30 },
        { header: 'SIM Card', key: 'sched_sim_card', width: 20 },
        { header: 'SAM', key: 'sched_sam', width: 20 },
        { header: 'Jenis Job', key: 'jenis_job', width: 20 },
        { header: 'Status', key: 'Status', width: 15 },
        { header: 'Case ID / Case ID Vendor', key: 'case_id_vendor', width: 30 },
        { header: 'Tanggal Jam Terima JO', key: 'Tanggal_Jam_Terima_JO', width: 30 },
        { header: 'Tanggal Upload', key: 'tgl_upload', width: 30 },
        { header: 'Time Start', key: 'time_start', width: 20 },
        { header: 'SLA Hari', key: 'SLA_Hari', width: 20 },
        { header: 'SLA Jam', key: 'SLA_Jam', width: 20 },
        { header: 'Status SLA', key: 'status_sla', width: 30 },
        { header: 'Catatan SLA', key: 'catatan_keterangan_sla', width: 30 },
        { header: 'Base Kantor Service Point', key: 'Base_Kantor_Service_Point', width: 30 },
        { header: 'Histori Teknisi Per Kunjungan', key: 'Histori_Keterangan_Teknisi_Perkunjungan', width: 50 },
        { header: 'Link Per Kunjungan', key: 'Link_per_Kunjungan', width: 40 },
        { header: 'Status QC', key: 'status_qc', width: 20 },
        { header: 'Jumlah Faktur', key: 'Jumlah_Faktur', width: 20 },
        { header: 'Main MID B', key: 'main_mid_b', width: 20 },
        { header: 'Main TID B', key: 'main_tid_b', width: 20 },
        { header: 'Latitude Finish', key: 'lat_finish', width: 20 },
        { header: 'Longitude Finish', key: 'long_finish', width: 20 },
        { header: 'Case ID Vendor', key: 'case_id_vendor', width: 30 },
        { header: 'Case ID MTI', key: 'case_id_mti', width: 30 }
    ];

    // Loop through data and add rows to the worksheet
    slljo.forEach(data => {
        worksheet.addRow({
            main_mid: data.main_mid,
            main_tid: data.main_tid,
            main_nama_merchant: data.main_nama_merchant,
            service_point: data.service_point,
            main_short_merchant: data.main_short_merchant,
            main_alamat: data.main_alamat,
            main_kota: data.main_kota,
            main_kanwil: data.main_kanwil,
            nama_status: data.nama_status,
            time_finish: data.time_finish,
            main_pic: data.main_pic,
            main_phone: data.main_phone,
            main_sn: data.main_sn,
            main_iccid: data.main_iccid,
            main_conn_type: data.main_conn_type,
            main_jenis_edc: data.main_jenis_edc,
            sched_kondisi_edc: data.sched_kondisi_edc,
            sched_kondisi_dongle: data.sched_kondisi_dongle,
            sched_kepuasan_merchant: data.sched_kepuasan_merchant,
            sched_alasan_merchant_tdk_puas: data.sched_alasan_merchant_tdk_puas,
            sched_request_merchant: data.sched_request_merchant,
            sched_edc_adaptor: data.sched_edc_adaptor,
            sched_kondisi_commnetwork: data.sched_kondisi_commnetwork,
            sched_problem_nonteknisi_edc: data.sched_problem_nonteknisi_edc,
            sched_indikasi_gesek_tunai: data.sched_indikasi_gesek_tunai,
            kategori: data.kategori,
            sub_kategori: data.sub_kategori,
            Remarks: data.Remarks,
            Reason: data.Reason,
            Status_Kunjungan: data.Status_Kunjungan,
            main_versi_edc: data.main_versi_edc,
            sched_m_pic_merchant: data.sched_m_pic_merchant,
            sched_m_pic_telp: data.sched_m_pic_telp,
            sched_edc_bank_lain: data.sched_edc_bank_lain,
            wo_digital: data.wo_digital,
            Assigned_Teknisi: data.Assigned_Teknisi,
            scan_sn_utama: data.scan_sn_utama,
            sched_sim_card: data.sched_sim_card,
            sched_sam: data.sched_sam,
            jenis_job: data.jenis_job,
            Status: data.Status,
            case_id_vendor: data.case_id_vendor,
            Tanggal_Jam_Terima_JO: data.Tanggal_Jam_Terima_JO,
            tgl_upload: data.tgl_upload,
            time_start: data.time_start,
            SLA_Hari: data.SLA_Hari,
            SLA_Jam: data.SLA_Jam,
            status_sla: data.status_sla,
            catatan_keterangan_sla: data.catatan_keterangan_sla,
            Base_Kantor_Service_Point: data.Base_Kantor_Service_Point,
            Histori_Keterangan_Teknisi_Perkunjungan: data.Histori_Keterangan_Teknisi_Perkunjungan,
            Link_per_Kunjungan: data.Link_per_Kunjungan,
            status_qc: data.status_qc,
            Jumlah_Faktur: data.Jumlah_Faktur,
            main_mid_b: data.main_mid_b,
            main_tid_b: data.main_tid_b,
            lat_finish: data.lat_finish,
            long_finish: data.long_finish,
            case_id_mti: data.case_id_mti
        });
    });

    return await workbook.xlsx.writeBuffer();
}



async function reportAllJoSelesaiKunjungan(slljo) {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('All JO');

    worksheet.columns = [
        { header: 'Main MID', key: 'main_mid', width: 20 },
        { header: 'Main MID B', key: 'main_mid_b', width: 20 },
        { header: 'Main TID', key: 'main_tid', width: 20 },
        { header: 'Main TID B', key: 'main_tid_b', width: 20 },
        { header: 'Nama Merchant', key: 'main_nama_merchant', width: 30 },
        { header: 'Service Point', key: 'service_point', width: 20 },
        { header: 'Alamat', key: 'main_alamat', width: 30 },
        { header: 'Kota', key: 'main_kota', width: 20 },
        { header: 'Kanwil', key: 'main_kanwil', width: 20 },
        { header: 'Status', key: 'nama_status', width: 15 },
        { header: 'Vendor ID', key: 'vendor_id', width: 20 },
        { header: 'Main Status', key: 'main_status', width: 20 },
        { header: 'ICCID', key: 'main_iccid', width: 30 },
        { header: 'Short Merchant', key: 'main_short_merchant', width: 30 },
        { header: 'Catatan SLA', key: 'catatan_keterangan_sla', width: 30 },
        { header: 'Time Finish', key: 'time_finish', width: 20 },
        { header: 'PIC', key: 'main_pic', width: 20 },
        { header: 'Phone', key: 'main_phone', width: 20 },
        { header: 'SN', key: 'main_sn', width: 30 },
        { header: 'MSISDN', key: 'main_msisdn', width: 20 },
        { header: 'Jenis EDC', key: 'main_jenis_edc', width: 20 },
        { header: 'Kondisi EDC', key: 'sched_kondisi_edc', width: 30 },
        { header: 'Kondisi Dongle', key: 'sched_kondisi_dongle', width: 30 },
        { header: 'Kepuasan Merchant', key: 'sched_kepuasan_merchant', width: 30 },
        { header: 'Alasan Merchant Tidak Puas', key: 'sched_alasan_merchant_tdk_puas', width: 50 },
        { header: 'Request Merchant', key: 'sched_request_merchant', width: 30 },
        { header: 'EDC Adaptor', key: 'sched_edc_adaptor', width: 30 },
        { header: 'Kondisi Comm Network', key: 'sched_kondisi_commnetwork', width: 30 },
        { header: 'Problem Nonteknisi EDC', key: 'sched_problem_nonteknisi_edc', width: 40 },
        { header: 'Indikasi Gesek Tunai', key: 'sched_indikasi_gesek_tunai', width: 30 },
        { header: 'Kategori', key: 'sched_kategori', width: 20 },
        { header: 'Sub Kategori', key: 'sched_sub_kategori', width: 30 },
        { header: 'Jobdesk', key: 'sched_jobdesk', width: 30 },
        { header: 'Note Merchant', key: 'sched_m_note_merchant', width: 30 },
        { header: 'PIC Merchant', key: 'sched_m_pic_merchant', width: 30 },
        { header: 'PIC Telp', key: 'sched_m_pic_telp', width: 20 },
        { header: 'EDC Bank Lain', key: 'sched_edc_bank_lain', width: 30 },
        { header: 'WO Digital', key: 'wo_digital', width: 30 },
        { header: 'ID Status', key: 'm_id_status', width: 20 },
        { header: 'Conn Type', key: 'main_conn_type', width: 20 },
        { header: 'Versi EDC', key: 'main_versi_edc', width: 20 },
        { header: 'Scan SN Utama', key: 'scan_sn_utama', width: 30 },
        { header: 'SIM Card', key: 'sched_sim_card', width: 20 },
        { header: 'SAM', key: 'sched_sam', width: 20 },
        { header: 'Status Detail', key: 'status_detail', width: 30 },
        { header: 'Teknisi', key: 'sched_teknisi', width: 30 },
        { header: 'ID Job', key: 'main_id_job', width: 30 },
        { header: 'Nama Job', key: 'nama_job', width: 30 },
        { header: 'ID Lapor', key: 'main_id_lapor', width: 30 },
        { header: 'Case ID Vendor', key: 'case_id_vendor', width: 30 },
        { header: 'Tgl Terima JO', key: 'main_tgl_terima_jo', width: 30 },
        { header: 'Jam Terima JO', key: 'main_jam_terima_jo', width: 30 },
        { header: 'Sched Parrent ID', key: 'sched_parrent_id', width: 30 },
        { header: 'Nama Base', key: 'nama_base', width: 30 },
        { header: 'Main ID', key: 'main_id', width: 30 },
        { header: 'Status SLA', key: 'status_sla', width: 30 },
        { header: 'QC Sesuai', key: 'sched_qc_sesuai', width: 30 },
        { header: 'Jumlah Faktur', key: 'sched_m_jumlah_faktur_merchant', width: 30 },
        { header: 'Tanggal Upload', key: 'tgl_upload', width: 30 },
        { header: 'Jam Terima', key: 'main_jam_terima', width: 30 }
    ];

    // Loop through data and add rows to the worksheet
    slljo.forEach(data => {
        worksheet.addRow(data);
    });

    return await workbook.xlsx.writeBuffer();
}

async function reportPM(slljo) {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('All JO');

    worksheet.columns = [
        { header: 'Main Bank', key: 'main_bank', width: 20 },
        { header: 'Vendor Name', key: 'vendor_name', width: 15 },
        { header: 'Keterangan', key: 'main_keterangan', width: 20 },
        { header: 'Main MID B', key: 'main_mid_b', width: 20 },
        { header: 'Main TID B', key: 'main_tid_b', width: 20 },
        { header: 'Main MID', key: 'main_mid', width: 20 },
        { header: 'Main TID', key: 'main_tid', width: 20 },
        { header: 'Jumlah Thermal', key: 'main_jumlah_thermal', width: 20 },
        { header: 'Status TID', key: 'main_status_tid', width: 15 },
        { header: 'Fitur EDC', key: 'main_fitur_edc', width: 15 },
        { header: 'Connection Type', key: 'main_conn_type', width: 15 },
        { header: 'SN', key: 'main_sn', width: 20 },
        { header: 'Model EDC', key: 'main_model_edc', width: 15 },
        { header: 'SN SIM Card', key: 'main_sn_simcard', width: 20 },
        { header: 'MSISDN', key: 'main_msisdn', width: 20 },
        { header: 'ICCID', key: 'main_iccid', width: 20 },
        { header: 'SIM Provider', key: 'main_sim_provider', width: 15 },
        { header: 'SN SAM Card', key: 'main_sn_samcard', width: 20 },
        { header: 'SAM Provider', key: 'main_sam_provider', width: 15 },
        { header: 'Nama Merchant', key: 'main_nama_merchant', width: 25 },
        { header: 'Short Merchant', key: 'main_short_merchant', width: 20 },
        { header: 'Alamat', key: 'main_alamat', width: 25 },
        { header: 'Kota', key: 'main_kota', width: 20 },
        { header: 'Region', key: 'main_region', width: 15 },
        { header: 'Keterangan AOM', key: 'main_ket_aom', width: 20 },
        { header: 'Segment', key: 'main_segment', width: 15 },
        { header: 'MCC Code', key: 'mcc_cd', width: 15 },
        { header: 'Group LOB', key: 'main_group_lob', width: 15 },
        { header: 'Comm Group', key: 'main_comm_group', width: 15 },
        { header: 'Status Pasang', key: 'status_pasang', width: 20 },
        { header: 'Merchant Type', key: 'main_merchant_type', width: 20 },
        { header: 'Member Bank', key: 'main_member_bank', width: 20 },
        { header: 'MID BMRI', key: 'main_mid_bmri', width: 20 },
        { header: 'TID BMRI', key: 'main_tid_bmri', width: 20 },
        { header: 'MID BRI', key: 'main_mid_bri', width: 20 },
        { header: 'TID BRI', key: 'main_tid_bri', width: 20 },
        { header: 'MID BNI', key: 'main_mid_bni', width: 20 },
        { header: 'TID BNI', key: 'main_tid_bni', width: 20 },
        { header: 'MID BTN', key: 'main_mid_btn', width: 20 },
        { header: 'TID BTN', key: 'main_tid_btn', width: 20 },
        { header: 'MID AstraPay', key: 'main_mid_astrapay', width: 20 },
        { header: 'TID AstraPay', key: 'main_tid_astrapay', width: 20 },
        { header: 'Status Kunjungan', key: 'status_kunjungan', width: 20 },
        { header: 'Time Finish', key: 'time_finish', width: 20 },
        { header: 'Nama Status', key: 'nama_status', width: 20 },
        { header: 'Detail Status', key: 'detail_status', width: 25 },
        { header: 'Note Merchant', key: 'sched_m_note_merchant', width: 25 },
        { header: 'PIC Merchant', key: 'sched_m_pic_merchant', width: 20 },
        { header: 'PIC Telp', key: 'sched_m_pic_telp', width: 20 },
        { header: 'EDC Bank Lain', key: 'sched_edc_bank_lain', width: 25 },
        { header: 'Menu DOR', key: 'menu_dor', width: 10 },
        { header: 'Update Marcoll', key: 'update_marcoll', width: 15 },
        { header: 'Update EOS', key: 'update_eos', width: 15 },
        { header: 'Scan SN Utama', key: 'scan_sn_utama', width: 20 },
        { header: 'SIM Card', key: 'sched_sim_card', width: 20 },
        { header: 'Jenis Provider', key: 'nama_produk', width: 20 },
        { header: 'SAM', key: 'sched_sam', width: 20 },
        { header: 'Uji Transaksi', key: 'sched_uji_transaksi', width: 20 },
        { header: 'Aplikasi & OS', key: 'os_patch', width: 25 },
        { header: 'BJ', key: 'BJ', width: 10 },
        { header: 'Update Cleaning', key: 'update_cleaning', width: 20 },
        { header: 'Nama Sticker Bank', key: 'nama_sticker_bank', width: 20 },
        { header: 'Materi Training', key: 'hasil_sched_materi_training', width: 20 },
        { header: 'Case ID MTI', key: 'case_id_mti', width: 20 },
        { header: 'ID Lapor', key: 'main_id_lapor', width: 15 },
        { header: 'Time Visit', key: 'times', width: 15 },
        { header: 'BQ', key: 'BQ', width: 10 },
        { header: 'Tgl Terima Struk', key: 'sched_m_tgl_terima_struk', width: 20 },
        { header: 'Histori Keterangan', key: 'Histori Keterangan Teknisi Perkunjungan', width: 30 },
        { header: 'Link Kunjungan', key: 'link_kunjungan', width: 30 },
        { header: 'Status Merchant', key: 'status_merchant_status_detail_pm', width: 20 },
        { header: 'Nama Status EDC', key: 'nama_status_edc_status_detail_pm', width: 20 },
        { header: 'Kategori Status', key: 'nama_kategori_pm', width: 20 },
        { header: 'Detail Nama', key: 'detail_nama', width: 20 },
        { header: 'Keterangan Kondisi', key: 'nama_keterangan_kondisi_pm', width: 20 },
        { header: 'Action Teknisi', key: 'nama_action_teknisi_pm', width: 20 },
    ];

    // Loop through data and add rows to the worksheet
    slljo.forEach(data => {
        worksheet.addRow(data);
    });

    return await workbook.xlsx.writeBuffer();
}


module.exports = {
    reportSnAllMtiH1, reportAllSn, reportSn, reportJO, reportJOActive, reportAllJoSelesaiKunjungan, reportPM
};