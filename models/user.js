const db = require("../hellpers/service");

class User {
	static async fetchAllSnMt1() {
		const [rows] = await db.execute(`SELECT * FROM view_all_sn_teknisi`);
		return rows;
	}

	static async fetchAllSn1Year() {
		const [rows] = await db.execute(`SELECT * FROM view_all_sn`);
		return rows;
	}

	static async getAllSn() {
		const [rows] = await db.execute(`SELECT * FROM allsn`);
		return rows;
	}

	static async fetchTerimaJO(req) {
		const { vendor_id, start_date, end_date } = req;
		const query = `
      SELECT
        main_mid,
        main_mid_b,
        main_tid,
        main_tid_b,
        main_nama_merchant,
        main_nama_merchant,
        tb_service_point.service_point AS service_point,
        main_alamat,
        main_kota,
        main_kanwil,
        nama_status,
        tb_maintenance.vendor_id,
        main_status,
        main_iccid,
        main_short_merchant,
        catatan_keterangan_sla,
        SUBSTR(MAX(CONCAT(CAST(time_finish AS CHAR), time_finish)), 20) AS time_finish,
        main_pic,
        main_phone,
        main_sn,
        main_msisdn,
        main_jenis_edc,
        main_jenis_edc,
        SUBSTR(MAX(CONCAT(CAST(time_finish AS CHAR), sched_kondisi_edc)), 20) AS sched_kondisi_edc,
        SUBSTR(MAX(CONCAT(CAST(time_finish AS CHAR), sched_kondisi_dongle)), 20) AS sched_kondisi_dongle,
        SUBSTR(MAX(CONCAT(CAST(time_finish AS CHAR), sched_kepuasan_merchant)), 20) AS sched_kepuasan_merchant,
        SUBSTR(MAX(CONCAT(CAST(time_finish AS CHAR), sched_alasan_merchant_tdk_puas)), 20) AS sched_alasan_merchant_tdk_puas,
        SUBSTR(MAX(CONCAT(CAST(time_finish AS CHAR), sched_request_merchant)), 20) AS sched_request_merchant,
        SUBSTR(MAX(CONCAT(CAST(time_finish AS CHAR), sched_edc_adaptor)), 20) AS sched_edc_adaptor,
        SUBSTR(MAX(CONCAT(CAST(time_finish AS CHAR), sched_kondisi_commnetwork)), 20) AS sched_kondisi_commnetwork,
        SUBSTR(MAX(CONCAT(CAST(time_finish AS CHAR), sched_problem_nonteknisi_edc)), 20) AS sched_problem_nonteknisi_edc,
        SUBSTR(MAX(CONCAT(CAST(time_finish AS CHAR), sched_indikasi_gesek_tunai)), 20) AS sched_indikasi_gesek_tunai,
        SUBSTR(MAX(CONCAT(CAST(time_finish AS CHAR), sched_kategori)), 20) AS sched_kategori,
        SUBSTR(MAX(CONCAT(CAST(time_finish AS CHAR), sched_sub_kategori)), 20) AS sched_sub_kategori,
        SUBSTR(MAX(CONCAT(CAST(time_finish AS CHAR), sched_jobdesk)), 20) AS sched_jobdesk,
        SUBSTR(MAX(CONCAT(CAST(time_finish AS CHAR), sched_m_note_merchant)), 20) AS sched_m_note_merchant,
        SUBSTR(MAX(CONCAT(CAST(time_finish AS CHAR), sched_m_pic_merchant)), 20) AS sched_m_pic_merchant,
        SUBSTR(MAX(CONCAT(CAST(time_finish AS CHAR), sched_m_pic_telp)), 20) AS sched_m_pic_telp,
        SUBSTR(MAX(CONCAT(CAST(time_finish AS CHAR), sched_edc_bank_lain)), 20) AS sched_edc_bank_lain,
        SUBSTR(MAX(CONCAT(CAST(time_finish AS CHAR), wo_digital)), 20) AS wo_digital,
        SUBSTR(MAX(CONCAT(CAST(time_finish AS CHAR), m_id_status)), 20) AS m_id_status,
        SUBSTR(MAX(CONCAT(CAST(time_finish AS CHAR), m_id_status)), 20) AS m_id_status,
        SUBSTR(MAX(CONCAT(CAST(time_finish AS CHAR), main_conn_type)), 20) AS main_conn_type,
        SUBSTR(MAX(CONCAT(CAST(time_finish AS CHAR), main_versi_edc)), 20) AS main_versi_edc,
        SUBSTR(MAX(CONCAT(CAST(time_finish AS CHAR), scan_sn_utama)), 20) AS scan_sn_utama,
        SUBSTR(MAX(CONCAT(CAST(time_finish AS CHAR), sched_sim_card)), 20) AS sched_sim_card,
        SUBSTR(MAX(CONCAT(CAST(time_finish AS CHAR), sched_sam)), 20) AS sched_sam,
        SUBSTR(MAX(CONCAT(CAST(time_finish AS CHAR), sched_m_jumlah_faktur_merchant)), 20) AS sched_m_jumlah_faktur_merchant,
        SUBSTR(MAX(CONCAT(CAST(time_finish AS CHAR), status_detail)), 20) AS status_detail,
        SUBSTR(MAX(CONCAT(CAST(sched_tgl AS CHAR), sched_teknisi)), 20) AS sched_teknisi,
        SUBSTR(MAX(CONCAT(CAST(time_finish AS CHAR), sched_qc_sesuai)), 20) AS sched_qc_sesuai,
        main_status,
        service_point,
        main_id_job,
        nama_job,
        tb_maintenance.main_id_lapor AS main_id_lapor,
        case_id_vendor,
        main_tgl_terima_jo,
        main_jam_terima_jo,
        sched_parrent_id,
        nama_base,
        tb_maintenance.main_id,
        status_sla,
        tgl_upload,
        main_jam_terima
      FROM tb_maintenance
      LEFT JOIN tb_main_schedule ON tb_main_schedule.main_id = tb_maintenance.main_id
      JOIN tb_status_job ON tb_status_job.versioning = tb_maintenance.main_status
        AND tb_status_job.vendor_id = tb_maintenance.vendor_id
      JOIN tb_service_point ON tb_service_point.id = tb_maintenance.sp_id
      JOIN tb_jenis_job ON tb_jenis_job.id_job = tb_maintenance.main_id_job
      JOIN tb_base_service_point ON tb_base_service_point.id_base = tb_service_point.base_kantor
      WHERE tb_maintenance.vendor_id = "${vendor_id}"
        AND tb_maintenance.sp_id IN ('3', '8', '18', '13', '4', '11', '17', '19', '1', '2', '9', '10', '23', '38', '5', '7', '22', '45', '69', '12', '14', '20', '21', '24', '26', '51', '52', '53', '54', '57', '59', '62', '63', '67', '68', '6', '0', '27', '28', '29', '30', '31', '32', '34', '33', '35', '40', '36', '39', '37', '41', '42', '43', '44', '46', '47', '48', '49', '50', '55', '56', '58', '60', '61', '64', '65', '66', '25')
        AND tb_maintenance.sp_id != 18
        AND main_tgl_terima_jo BETWEEN "${start_date}" AND "${end_date}"
      GROUP BY tb_maintenance.main_id;
    `;

		const [rows] = await db.execute(query);
		return rows;
	}

	static async fetchSelesaiJO(req) {
		const { vendor_id, start_date, end_date } = req;
		const query = `
    
  select
	main_mid,
	main_mid_b,
	main_tid,
	main_tid_b,
	main_nama_merchant,
	tb_service_point.service_point as service_point,
	main_alamat,
	main_kota,
	main_kanwil,
	nama_status,
	tb_maintenance.vendor_id,
	main_status,
	main_iccid,
	main_short_merchant,
	catatan_keterangan_sla,
	time_finish,
	main_pic,
	main_phone,
	main_sn,
	main_msisdn,
	main_jenis_edc,
	main_jenis_edc,
	sched_kondisi_edc,
	sched_kondisi_dongle,
	sched_kepuasan_merchant,
	sched_alasan_merchant_tdk_puas,
	sched_request_merchant,
	sched_edc_adaptor,
	sched_kondisi_commnetwork,
	sched_problem_nonteknisi_edc,
	sched_indikasi_gesek_tunai,
	sched_kategori,
	sched_sub_kategori,
	sched_jobdesk,
	sched_m_note_merchant,
	sched_m_pic_merchant,
	sched_m_pic_telp,
	sched_edc_bank_lain,
	wo_digital,
	m_id_status,
	main_conn_type,
	main_versi_edc,
	scan_sn_utama,
	sched_sim_card,
	sched_sam,
	status_detail,
	sched_teknisi,
	main_status,
	service_point,
	main_id_job,
	nama_job,
	tb_maintenance.main_id_lapor as main_id_lapor,
	case_id_vendor,
	main_tgl_terima_jo,
	main_jam_terima_jo,
	sched_parrent_id,
	nama_base,
	tb_maintenance.main_id,
	status_sla,
	sched_qc_sesuai,
	sched_m_jumlah_faktur_merchant,
	tgl_upload,
	main_jam_terima
from
	tb_maintenance
left join tb_main_schedule on
	tb_main_schedule.main_id = tb_maintenance.main_id
join tb_status_job on
	tb_status_job.versioning = tb_maintenance.main_status
	and tb_status_job.vendor_id = tb_maintenance.vendor_id
join tb_service_point on
	tb_service_point.id = tb_maintenance.sp_id
join tb_jenis_job on
	tb_jenis_job.id_job = tb_maintenance.main_id_job
join tb_base_service_point on
	tb_base_service_point.id_base = tb_service_point.base_kantor
where
	sched_idx in (
	select
		sched_idx
	from
		tb_vw_max_main_id_maintenance)
	and tb_maintenance.vendor_id = "${vendor_id}"
	and (tb_maintenance.sp_id = '3'
		or tb_maintenance.sp_id = '3'
		or tb_maintenance.sp_id = '8'
		or tb_maintenance.sp_id = '18'
		or tb_maintenance.sp_id = '13'
		or tb_maintenance.sp_id = '4'
		or tb_maintenance.sp_id = '11'
		or tb_maintenance.sp_id = '17'
		or tb_maintenance.sp_id = '19'
		or tb_maintenance.sp_id = '1'
		or tb_maintenance.sp_id = '2'
		or tb_maintenance.sp_id = '9'
		or tb_maintenance.sp_id = '10'
		or tb_maintenance.sp_id = '23'
		or tb_maintenance.sp_id = '38'
		or tb_maintenance.sp_id = '5'
		or tb_maintenance.sp_id = '7'
		or tb_maintenance.sp_id = '22'
		or tb_maintenance.sp_id = '45'
		or tb_maintenance.sp_id = '69'
		or tb_maintenance.sp_id = '12'
		or tb_maintenance.sp_id = '14'
		or tb_maintenance.sp_id = '20'
		or tb_maintenance.sp_id = '21'
		or tb_maintenance.sp_id = '24'
		or tb_maintenance.sp_id = '26'
		or tb_maintenance.sp_id = '51'
		or tb_maintenance.sp_id = '52'
		or tb_maintenance.sp_id = '53'
		or tb_maintenance.sp_id = '54'
		or tb_maintenance.sp_id = '57'
		or tb_maintenance.sp_id = '59'
		or tb_maintenance.sp_id = '62'
		or tb_maintenance.sp_id = '63'
		or tb_maintenance.sp_id = '67'
		or tb_maintenance.sp_id = '68'
		or tb_maintenance.sp_id = '6'
		or tb_maintenance.sp_id = '0'
		or tb_maintenance.sp_id = '27'
		or tb_maintenance.sp_id = '28'
		or tb_maintenance.sp_id = '29'
		or tb_maintenance.sp_id = '30'
		or tb_maintenance.sp_id = '31'
		or tb_maintenance.sp_id = '32'
		or tb_maintenance.sp_id = '34'
		or tb_maintenance.sp_id = '33'
		or tb_maintenance.sp_id = '35'
		or tb_maintenance.sp_id = '40'
		or tb_maintenance.sp_id = '36'
		or tb_maintenance.sp_id = '39'
		or tb_maintenance.sp_id = '37'
		or tb_maintenance.sp_id = '41'
		or tb_maintenance.sp_id = '42'
		or tb_maintenance.sp_id = '43'
		or tb_maintenance.sp_id = '44'
		or tb_maintenance.sp_id = '46'
		or tb_maintenance.sp_id = '47'
		or tb_maintenance.sp_id = '48'
		or tb_maintenance.sp_id = '49'
		or tb_maintenance.sp_id = '50'
		or tb_maintenance.sp_id = '55'
		or tb_maintenance.sp_id = '56'
		or tb_maintenance.sp_id = '58'
		or tb_maintenance.sp_id = '60'
		or tb_maintenance.sp_id = '61'
		or tb_maintenance.sp_id = '64'
		or tb_maintenance.sp_id = '65'
		or tb_maintenance.sp_id = '66'
		or tb_maintenance.sp_id = '25'
		or tb_maintenance.sp_id = '3' )
	and tb_maintenance.sp_id != 18
	and (main_status = 8
		or main_status = 9)
	and time_finish between "${start_date}" and "${end_date}"
group by
	tb_maintenance.main_id
    `;

		const [rows] = await db.execute(query);
		return rows;
	}

	static async fetchRekonsilisasi(req) {
		const { vendor_id, start_date, end_date } = req;

		const query = `
    
          select
            *
          from
            tb_vw_main_schdule_joined_open_mti
          where
            sched_parrent_id in (
            select
              sched_parrent_id
            from
              tb_vw_main_schedule_group_parrent_id
            where
              time_finish between "${start_date}" and "${end_date}")
            and tb_vw_main_schdule_joined_open_mti.vendor_id = "${vendor_id}"
            
            and tb_vw_main_schdule_joined_open_mti.sp_id != 19
            and tb_vw_main_schdule_joined_open_mti.sp_id != 18
          order by
            tb_vw_main_schdule_joined_open_mti.sched_parrent_id asc
              `;

		const [rows] = await db.execute(query);
		return rows;
	}

	static async fetchAllJO(req) {

		const {
			vendor_id,
			sp_id,
			start_date_upload,
			end_date_upload,
			start_date_tgl_terima,
			end_date_tgl_terima,
			main_id_job
		} = req.body;

		const query = `SELECT main_mid, main_tid, main_nama_merchant,tb_service_point.service_point,main_short_merchant,main_alamat,main_kota,main_kanwil,nama_status,
substr(max(CONCAT(CAST(time_finish AS CHAR), time_finish )), 20) as time_finish,
main_pic,main_phone,CONCAT("'",main_sn) as main_sn,CONCAT("'",main_iccid) as main_iccid,main_conn_type,main_jenis_edc,
substr(max(CONCAT(CAST(time_finish AS CHAR), sched_kondisi_edc )), 20) as sched_kondisi_edc,
substr(max(CONCAT(CAST(time_finish AS CHAR), sched_kondisi_dongle )), 20) as sched_kondisi_dongle,
substr(max(CONCAT(CAST(time_finish AS CHAR), sched_kepuasan_merchant )), 20) as sched_kepuasan_merchant,
substr(max(CONCAT(CAST(time_finish AS CHAR), sched_alasan_merchant_tdk_puas )), 20) as sched_alasan_merchant_tdk_puas,
substr(max(CONCAT(CAST(time_finish AS CHAR), sched_request_merchant )), 20) as sched_request_merchant,
substr(max(CONCAT(CAST(time_finish AS CHAR), sched_edc_adaptor )), 20) as sched_edc_adaptor,
substr(max(CONCAT(CAST(time_finish AS CHAR), sched_kondisi_commnetwork )), 20) as sched_kondisi_commnetwork,
substr(max(CONCAT(CAST(time_finish AS CHAR), sched_problem_nonteknisi_edc )), 20) as sched_problem_nonteknisi_edc,
substr(max(CONCAT(CAST(time_finish AS CHAR), sched_indikasi_gesek_tunai )), 20) as sched_indikasi_gesek_tunai,
nama_status as kategori,
(SELECT GROUP_CONCAT(DISTINCT COALESCE(detail_nama,'Belum dikunjungi') SEPARATOR ', ') AS id_base_lokasi_teknisies
from tb_main_schedule x1
left join tb_status_detail_pm_dev_for_juli_2024 x2 on x2.det_id = x1.status_detail
where sched_vendor_id='2' and sched_parrent_id = sched_parrent_id and main_id= tb_maintenance.main_id) as 'sub_kategori',
'' as 'Remarks',
substr(max(CONCAT(CAST(time_finish AS CHAR), sched_m_note_merchant )), 20) as Reason,
CASE
		WHEN main_status ='3' or main_status ='4'or main_status ='8' or main_status ='9' THEN 'Sudah dikunjungi' 
		ELSE 'Belum dikunjungi'
END AS 'Status Kunjungan',
main_versi_edc,
substr(max(CONCAT(CAST(time_finish AS CHAR), sched_m_pic_merchant )), 20) as sched_m_pic_merchant,
substr(max(CONCAT(CAST(time_finish AS CHAR), sched_m_pic_telp )), 20) as sched_m_pic_telp,
substr(max(CONCAT(CAST(time_finish AS CHAR), sched_edc_bank_lain )), 20) as sched_edc_bank_lain,
wo_digital,
(SELECT CONCAT(user_firstname,' ',user_lastname) FROM tb_user_master where id_user = substr(max(CONCAT(CAST(sched_tgl AS CHAR), sched_teknisi )), 20)) as 'Assigned Teknisi',
substr(max(CONCAT(CAST(time_finish AS CHAR), scan_sn_utama )), 20) as scan_sn_utama,
substr(max(CONCAT(CAST(time_finish AS CHAR), sched_sim_card )), 20) as sched_sim_card,
substr(max(CONCAT(CAST(time_finish AS CHAR), sched_sam )), 20) as sched_sam,
service_point,
CONCAT(main_id_job,' - ',nama_job) as 'Jenis Job',
(SELECT CONCAT(main_status,' - ',nama_status) FROM tb_status_job where versioning = main_status and vendor_id = 2 ) as 'Status',
-- tb_maintenance.main_id_lapor,case_id_mti,
CASE
		WHEN case_id_mti !='' or case_id_mti is not null THEN case_id_mti
		ELSE tb_maintenance.main_id_lapor
END AS 'Case ID / Case ID Vendor',

CONCAT(main_tgl_terima_jo,' ',main_jam_terima_jo) as 'Tanggal Jam Terima JO',
tgl_upload,
substr(min(CONCAT(CAST(time_start AS CHAR), time_start )), 20) as time_start,	
'' as 'SLA Hari', '' as 'SLA Jam',
CASE
		WHEN status_sla  ='1' THEN 'In SLA'
		WHEN status_sla  ='2' THEN 'Out SLA'
		else ''
END AS 'status sla',
catatan_keterangan_sla,
nama_base as 'Base Kantor Service Point',
(SELECT GROUP_CONCAT(sched_m_note_merchant SEPARATOR '|') from tb_main_schedule where sched_vendor_id='2' and sched_parrent_id = sched_parrent_id and main_id= tb_maintenance.main_id and status_journey = 0 limit 3) as 'Histori Keterangan Teknisi Perkunjungan',
(SELECT GROUP_CONCAT(CONCAT('LINK :https://fms.jadintracker.id/print/prints/download_pdf_selesai/',sched_idx) SEPARATOR '|') from tb_main_schedule where sched_vendor_id='2' and sched_parrent_id = sched_parrent_id and main_id= tb_maintenance.main_id and status_journey = 0 limit 3) as 'Link per Kunjungan',
CASE
		WHEN substr(max(CONCAT(CAST(time_finish AS CHAR), sched_qc_sesuai )), 20) ='1' THEN 'Sesuai' 
		WHEN substr(max(CONCAT(CAST(time_finish AS CHAR), sched_qc_sesuai )), 20) = '2' THEN 'Tidak Sesuai'
		else 'Belum QC'
END AS 'status qc',
substr(max(CONCAT(CAST(time_finish AS CHAR), sched_m_jumlah_faktur_merchant )), 20) as 'Jumlah Faktur',
-- substr(max(CONCAT(CAST(time_finish AS CHAR), status_journey )), 20) as 'Journey',main_status
-- status_journey,
main_mid_b,main_tid_b,
substr(max(CONCAT(CAST(tb_main_schedule.time_finish AS CHAR), tb_main_schedule.lat_finish )), 20) as lat_finish,
substr(max(CONCAT(CAST(tb_main_schedule.time_finish AS CHAR), tb_main_schedule.long_finish )), 20) as long_finish,
case_id_vendor,case_id_mti


FROM tb_maintenance 
LEFT JOIN tb_main_schedule ON tb_main_schedule.main_id=tb_maintenance.main_id 
JOIN tb_status_job ON tb_status_job.versioning=tb_maintenance.main_status and tb_status_job.vendor_id=tb_maintenance.vendor_id 
JOIN tb_service_point ON tb_service_point.id=tb_maintenance.sp_id 
JOIN tb_jenis_job ON tb_jenis_job.id_job=tb_maintenance.main_id_job JOIN tb_base_service_point ON tb_base_service_point.id_base=tb_service_point.base_kantor 
WHERE tb_maintenance.vendor_id = "${vendor_id}" AND tb_maintenance.sp_id = "${sp_id}"
AND
(
tgl_upload BETWEEN "${start_date_upload}" and "${end_date_upload}"
or
main_tgl_terima BETWEEN "${start_date_tgl_terima}" and "${end_date_tgl_terima}"
)
and (main_id_job ="${main_id_job}" or main_id_job ="${main_id_job}")
GROUP BY tb_maintenance.main_id ORDER BY tb_maintenance.main_id,tb_maintenance.sp_id,tb_maintenance.sp_id,main_kota,tb_maintenance.sp_id,tb_maintenance.main_mid`;

		const [rows] = await db.execute(query);
		return rows;
	}


	static async alljo() {

		const query = `SELECT
	main_mid,
	main_tid,
	main_nama_merchant,
	tb_service_point.service_point,
	main_short_merchant,
	main_alamat,
	main_kota,
	main_kanwil,
	nama_status,
	substr(max(CONCAT(CAST(time_finish AS CHAR), time_finish )), 20) as time_finish,
	main_pic,
	main_phone,
	CONCAT("'", main_sn) as main_sn,
	CONCAT("'", main_iccid) as main_iccid,
	main_conn_type,
	main_jenis_edc,
	substr(max(CONCAT(CAST(time_finish AS CHAR), sched_kondisi_edc )), 20) as sched_kondisi_edc,
	substr(max(CONCAT(CAST(time_finish AS CHAR), sched_kondisi_dongle )), 20) as sched_kondisi_dongle,
	substr(max(CONCAT(CAST(time_finish AS CHAR), sched_kepuasan_merchant )), 20) as sched_kepuasan_merchant,
	substr(max(CONCAT(CAST(time_finish AS CHAR), sched_alasan_merchant_tdk_puas )), 20) as sched_alasan_merchant_tdk_puas,
	substr(max(CONCAT(CAST(time_finish AS CHAR), sched_request_merchant )), 20) as sched_request_merchant,
	substr(max(CONCAT(CAST(time_finish AS CHAR), sched_edc_adaptor )), 20) as sched_edc_adaptor,
	substr(max(CONCAT(CAST(time_finish AS CHAR), sched_kondisi_commnetwork )), 20) as sched_kondisi_commnetwork,
	substr(max(CONCAT(CAST(time_finish AS CHAR), sched_problem_nonteknisi_edc )), 20) as sched_problem_nonteknisi_edc,
	substr(max(CONCAT(CAST(time_finish AS CHAR), sched_indikasi_gesek_tunai )), 20) as sched_indikasi_gesek_tunai,
	nama_status as kategori,
	(
	SELECT
		GROUP_CONCAT(DISTINCT COALESCE(detail_nama, 'Belum dikunjungi') SEPARATOR ', ') AS id_base_lokasi_teknisies
	from
		tb_main_schedule x1
	left join tb_status_detail_pm_dev_for_juli_2024 x2 on
		x2.det_id = x1.status_detail
	where
		sched_vendor_id = '2'
		and sched_parrent_id = sched_parrent_id
		and main_id = tb_maintenance.main_id) as 'sub_kategori',
	'' as 'Remarks',
	substr(max(CONCAT(CAST(time_finish AS CHAR), sched_m_note_merchant )), 20) as Reason,
	CASE
		WHEN main_status = '3'
		or main_status = '4'
		or main_status = '8'
		or main_status = '9' THEN 'Sudah dikunjungi'
		ELSE 'Belum dikunjungi'
	END AS 'Status_Kunjungan',
	main_versi_edc,
	substr(max(CONCAT(CAST(time_finish AS CHAR), sched_m_pic_merchant )), 20) as sched_m_pic_merchant,
	substr(max(CONCAT(CAST(time_finish AS CHAR), sched_m_pic_telp )), 20) as sched_m_pic_telp,
	substr(max(CONCAT(CAST(time_finish AS CHAR), sched_edc_bank_lain )), 20) as sched_edc_bank_lain,
	wo_digital,
	(
	SELECT
		CONCAT(user_firstname, ' ', user_lastname)
	FROM
		tb_user_master
	where
		id_user = substr(max(CONCAT(CAST(sched_tgl AS CHAR), sched_teknisi )), 20)) as 'Assigned_Teknisi',
	substr(max(CONCAT(CAST(time_finish AS CHAR), scan_sn_utama )), 20) as scan_sn_utama,
	substr(max(CONCAT(CAST(time_finish AS CHAR), sched_sim_card )), 20) as sched_sim_card,
	substr(max(CONCAT(CAST(time_finish AS CHAR), sched_sam )), 20) as sched_sam,
	service_point,
	CONCAT(main_id_job, ' - ', nama_job) as 'jenis_job',
	(
	SELECT
		CONCAT(main_status, ' - ', nama_status)
	FROM
		tb_status_job
	where
		versioning = main_status
		and vendor_id = 2 ) as 'Status',
	-- tb_maintenance.main_id_lapor,case_id_mti,
CASE
		WHEN case_id_mti != ''
		or case_id_mti is not null THEN case_id_mti
		ELSE tb_maintenance.main_id_lapor
	END AS 'case_id_vendor',
	CONCAT(main_tgl_terima_jo, ' ', main_jam_terima_jo) as 'Tanggal_Jam_Terima_JO',
	tgl_upload,
	substr(min(CONCAT(CAST(time_start AS CHAR), time_start )), 20) as time_start,
	'' as 'SLA_Hari',
	'' as 'SLA_Jam',
	CASE
		WHEN status_sla = '1' THEN 'In SLA'
		WHEN status_sla = '2' THEN 'Out SLA'
		else ''
	END AS 'status_sla',
	catatan_keterangan_sla,
	nama_base as 'Base_Kantor_Service_Point',
	(
	SELECT
		GROUP_CONCAT(sched_m_note_merchant SEPARATOR '|')
	from
		tb_main_schedule
	where
		sched_vendor_id = '2'
		and sched_parrent_id = sched_parrent_id
		and main_id = tb_maintenance.main_id
		and status_journey = 0
	limit 3) as 'Histori_Keterangan_Teknisi_Perkunjungan',
	(
	SELECT
		GROUP_CONCAT(CONCAT('LINK :https://fms.jadintracker.id/print/prints/download_pdf_selesai/', sched_idx) SEPARATOR '|')
	from
		tb_main_schedule
	where
		sched_vendor_id = '2'
		and sched_parrent_id = sched_parrent_id
		and main_id = tb_maintenance.main_id
		and status_journey = 0
	limit 3) as 'Link_per_Kunjungan',
	CASE
		WHEN substr(max(CONCAT(CAST(time_finish AS CHAR), sched_qc_sesuai )), 20) = '1' THEN 'Sesuai'
		WHEN substr(max(CONCAT(CAST(time_finish AS CHAR), sched_qc_sesuai )), 20) = '2' THEN 'Tidak Sesuai'
		else 'Belum QC'
	END AS 'status_qc',
	substr(max(CONCAT(CAST(time_finish AS CHAR), sched_m_jumlah_faktur_merchant )), 20) as 'Jumlah_Faktur',
	-- substr(max(CONCAT(CAST(time_finish AS CHAR), status_journey )), 20) as 'Journey',main_status
	-- status_journey,
	main_mid_b,
	main_tid_b,
	substr(max(CONCAT(CAST(tb_main_schedule.time_finish AS CHAR), tb_main_schedule.lat_finish )), 20) as lat_finish,
	substr(max(CONCAT(CAST(tb_main_schedule.time_finish AS CHAR), tb_main_schedule.long_finish )), 20) as long_finish,
	case_id_vendor,
	case_id_mti
FROM
	tb_maintenance
LEFT JOIN tb_main_schedule ON
	tb_main_schedule.main_id = tb_maintenance.main_id
JOIN tb_status_job ON
	tb_status_job.versioning = tb_maintenance.main_status
	and tb_status_job.vendor_id = tb_maintenance.vendor_id
JOIN tb_service_point ON
	tb_service_point.id = tb_maintenance.sp_id
JOIN tb_jenis_job ON
	tb_jenis_job.id_job = tb_maintenance.main_id_job
JOIN tb_base_service_point ON
	tb_base_service_point.id_base = tb_service_point.base_kantor
WHERE
	tb_maintenance.vendor_id = '2'
	AND tb_maintenance.sp_id != 18
	AND
(
tgl_upload BETWEEN DATE_SUB(CURRENT_DATE(), INTERVAL 6 MONTH) AND CURRENT_DATE()
    OR
main_tgl_terima BETWEEN DATE_SUB(CURRENT_DATE(), INTERVAL 6 MONTH) AND CURRENT_DATE()
)
	and (main_id_job = '6'
		or main_id_job = '20')
	AND ( main_status = 8 OR main_status = 9 ) 
GROUP BY
	tb_maintenance.main_id
ORDER BY
	tb_maintenance.main_id,
	tb_maintenance.sp_id,
	tb_maintenance.sp_id,
	main_kota,
	tb_maintenance.sp_id,
	tb_maintenance.main_mid`;
		const [rows] = await db.execute(query);
		return rows;
	}


	static async alljobselesaikunjungan() {

		const query = `SELECT
				main_mid,
				main_mid_b,
				main_tid,
				main_tid_b,
				main_nama_merchant,
				tb_service_point.service_point AS service_point,
				main_alamat,
				main_kota,
				main_kanwil,
				nama_status,
				tb_maintenance.vendor_id,
				main_status,
				main_iccid,
				main_short_merchant,
				catatan_keterangan_sla,
				time_finish,
				main_pic,
				main_phone,
				main_sn,
				main_msisdn,
				main_jenis_edc,
				main_jenis_edc,
				sched_kondisi_edc,
				sched_kondisi_dongle,
				sched_kepuasan_merchant,
				sched_alasan_merchant_tdk_puas,
				sched_request_merchant,
				sched_edc_adaptor,
				sched_kondisi_commnetwork,
				sched_problem_nonteknisi_edc,
				sched_indikasi_gesek_tunai,
				sched_kategori,
				sched_sub_kategori,
				sched_jobdesk,
				sched_m_note_merchant,
				sched_m_pic_merchant,
				sched_m_pic_telp,
				sched_edc_bank_lain,
				wo_digital,
				m_id_status,
				main_conn_type,
				main_versi_edc,
				scan_sn_utama,
				sched_sim_card,
				sched_sam,
				status_detail,
				sched_teknisi,
				main_status,
				service_point,
				main_id_job,
				nama_job,
				tb_maintenance.main_id_lapor AS main_id_lapor,
				case_id_vendor,
				main_tgl_terima_jo,
				main_jam_terima_jo,
				sched_parrent_id,
				nama_base,
				tb_maintenance.main_id,
				status_sla,
				sched_qc_sesuai,
				sched_m_jumlah_faktur_merchant,
				tgl_upload,
				main_jam_terima 
			FROM
				tb_maintenance
				LEFT JOIN tb_main_schedule ON tb_main_schedule.main_id = tb_maintenance.main_id
				JOIN tb_status_job ON tb_status_job.versioning = tb_maintenance.main_status 
				AND tb_status_job.vendor_id = tb_maintenance.vendor_id
				JOIN tb_service_point ON tb_service_point.id = tb_maintenance.sp_id
				JOIN tb_jenis_job ON tb_jenis_job.id_job = tb_maintenance.main_id_job
				JOIN tb_base_service_point ON tb_base_service_point.id_base = tb_service_point.base_kantor 
			WHERE
				sched_idx IN ( SELECT sched_idx FROM tb_vw_max_main_id_maintenance ) 
				AND tb_maintenance.vendor_id = '2' 
				AND tb_maintenance.sp_id != 18 
				AND ( main_status = 8 OR main_status = 9 ) 
				AND time_finish BETWEEN CURDATE() 
				AND DATE_ADD(CURDATE(), INTERVAL 3 MONTH)
			GROUP BY
				tb_maintenance.main_id`;
					const [rows] = await db.execute(query);
					return rows;
  }
  
	static async reportPM() {
		const query = `SELECT 
			main_bank,
			'MTI' as vendor_name,
			main_keterangan,
			CAST(main_mid_b AS CHAR) AS main_mid_b,
			CAST(main_tid_b AS CHAR) AS main_tid_b,
			CAST(main_mid AS CHAR) AS main_mid,
			CAST(main_tid AS CHAR) AS main_tid,
			main_jumlah_thermal,
			main_status_tid, main_fitur_edc,
			main_conn_type,
			CAST(main_sn AS CHAR) AS main_sn
			,main_model_edc, main_sn_simcard,main_msisdn, 
			CAST(main_iccid AS CHAR) AS main_iccid
			, main_sim_provider, main_sn_samcard, main_sam_provider, main_nama_merchant, main_short_merchant, main_alamat,main_kota,main_region,main_ket_aom,main_segment,mcc_cd,main_group_lob,main_comm_group,status_pasang,
			main_merchant_type,
			main_member_bank,
			main_mid_bmri,
			main_tid_bmri,
			main_mid_bri,
			main_tid_bri,
			main_mid_bni,
			main_tid_bni,
			main_mid_btn,
			main_tid_btn,
			main_mid_astrapay,
			main_tid_astrapay,
			CASE
				WHEN main_status = '3' or main_status = '4' or main_status = '8' or main_status = '9' or main_status = '12' THEN
					'Terkunjungi'
				ELSE
					'Belum Terkunjungi'
			END as 'status_kunjungan',
			substr(max(CONCAT(CAST(time_finish AS CHAR), time_finish )), 20) as time_finish, 

			nama_status,
			CONCAT(COALESCE(substr(max(CONCAT(CAST(time_finish AS CHAR), nama_kategori_pm )), 20), ''), '-', COALESCE(substr(max(CONCAT(CAST(time_finish AS CHAR), detail_nama )), 20), '')) AS 'detail_status',
			substr(max(CONCAT(CAST(time_finish AS CHAR), sched_m_note_merchant )), 20) as sched_m_note_merchant, 
			substr(max(CONCAT(CAST(time_finish AS CHAR), sched_m_pic_merchant )), 20) as sched_m_pic_merchant, 
			substr(max(CONCAT(CAST(time_finish AS CHAR), sched_m_pic_telp )), 20) as sched_m_pic_telp, 
			(SELECT 
					GROUP_CONCAT(nama_bank ORDER BY id_tb_bank SEPARATOR ', ')
			FROM 
					tb_edc_bank
			WHERE 
					FIND_IN_SET(id_tb_bank, substr(max(CONCAT(CAST(time_finish AS CHAR), sched_edc_bank_lain )), 20) ) > 0
			) as sched_edc_bank_lain,

			CASE 
				WHEN substr(max(CONCAT(CAST(time_finish AS CHAR), sched_menu_dor )), 20) = '1' THEN
					'Bagus'
				WHEN substr(max(CONCAT(CAST(time_finish AS CHAR), sched_menu_dor )), 20) = '2' THEN
					'Rusak'
				ELSE
					''
			END as menu_dor,
			CASE 
				WHEN substr(max(CONCAT(CAST(time_finish AS CHAR), sched_update_marcoll )), 20) = '1' THEN
					'Done'
				WHEN substr(max(CONCAT(CAST(time_finish AS CHAR), sched_update_marcoll )), 20) = '2' THEN
					'In Progress'
				ELSE
					''
			END as update_marcoll,
			CASE 
				WHEN substr(max(CONCAT(CAST(time_finish AS CHAR), sched_update_eos )), 20) = '1' THEN
					'Done'
				WHEN substr(max(CONCAT(CAST(time_finish AS CHAR), sched_update_eos )), 20) = '2' THEN
					'In Progress'
				ELSE
					''
			END as update_eos,
			CAST(substr(max(CONCAT(CAST(time_finish AS CHAR), scan_sn_utama )), 20) AS CHAR) AS scan_sn_utama,
			substr(max(CONCAT(CAST(time_finish AS CHAR), sched_sim_card )), 20) as sched_sim_card, 
			(SELECT nama_produk from tb_produk WHERE id_produk= substr(max(CONCAT(CAST(time_finish AS CHAR), sched_jenis_provider )), 20)), 
			CONCAT(substr(max(CONCAT(CAST(time_finish AS CHAR), sched_sam )), 20),' - ',substr(max(CONCAT(CAST(time_finish AS CHAR), sched_sam_2 )), 20)) as sched_sam,
			(SELECT 
					GROUP_CONCAT(jumlah_transaksi ORDER BY id_uji_transaksi SEPARATOR ', ')
			FROM 
					tb_uji_transaksi
			WHERE 
					FIND_IN_SET(id_uji_transaksi, substr(max(CONCAT(CAST(time_finish AS CHAR), sched_materi_training )), 20) ) > 0
			) as sched_uji_transaksi,

			CONCAT(substr(max(CONCAT(CAST(time_finish AS CHAR), use_for )), 20),' - ',substr(max(CONCAT(CAST(time_finish AS CHAR), versi_aplikasi )), 20)),
			CONCAT(substr(max(CONCAT(CAST(time_finish AS CHAR), use_for )), 20),' - ',substr(max(CONCAT(CAST(time_finish AS CHAR), os_patch_name )), 20)),
			'' as 'BJ',
			CASE 
				WHEN substr(max(CONCAT(CAST(time_finish AS CHAR), sched_edc_update_cleaning_edc )), 20) = '1' THEN
					'Yes'
				ELSE
					'No'
			END as update_eos,
			substr(max(CONCAT(CAST(time_finish AS CHAR), nama_sticker_bank )), 20) as nama_sticker_bank,
			CASE 
				WHEN substr(max(CONCAT(CAST(time_finish AS CHAR), sched_materi_training )), 20) like '%12%' THEN
					'Yes'
				ELSE
					'No'
			END as hasil_sched_materi_training,
			case_id_mti as 'BN',
			case_id_mti as case_id_mti,
			CONCAT(COALESCE(tb_maintenance.main_id_lapor,''),' (FMS)'),
			substr(min(CONCAT(CAST(time_visit AS CHAR), time_visit )), 20) as times ,
			'' as BQ,
			substr(max(CONCAT(CAST(time_finish AS CHAR), sched_sim_card )), 20) as sched_sim_card,
			(SELECT 
					GROUP_CONCAT(jumlah_transaksi ORDER BY id_uji_transaksi SEPARATOR ', ')
			FROM 
					tb_uji_transaksi
			WHERE 
					FIND_IN_SET(id_uji_transaksi, substr(max(CONCAT(CAST(time_finish AS CHAR), sched_materi_training )), 20) ) > 0
			) as sched_uji_transaksi,
			substr(max(CONCAT(CAST(time_finish AS CHAR), sched_m_tgl_terima_struk )), 20) as sched_m_tgl_terima_struk,
			(SELECT GROUP_CONCAT(sched_m_note_merchant SEPARATOR '|') from tb_main_schedule where sched_vendor_id='2' and sched_parrent_id = sched_parrent_id and main_id= tb_maintenance.main_id and status_journey = 0 limit 3) as 'Histori Keterangan Teknisi Perkunjungan', 
			(SELECT GROUP_CONCAT(CONCAT('LINK :https://fms.jadintracker.id/print/prints/download_pdf_selesai/',sched_idx) SEPARATOR '|') from tb_main_schedule where sched_vendor_id='2' and sched_parrent_id = sched_parrent_id and main_id= tb_maintenance.main_id and status_journey = 0 limit 3) as link_kunjungan,
			substr(max(CONCAT(CAST(time_finish AS CHAR), d.status_merchant_status_detail_pm )), 20) as status_merchant_status_detail_pm,
			substr(max(CONCAT(CAST(time_finish AS CHAR), nama_status_edc_status_detail_pm )), 20) as nama_status_edc_status_detail_pm,
			substr(max(CONCAT(CAST(time_finish AS CHAR), nama_kategori_pm )), 20) as nama_kategori_pm,
			substr(max(CONCAT(CAST(time_finish AS CHAR), detail_nama )), 20) as detail_nama,
			substr(max(CONCAT(CAST(time_finish AS CHAR), nama_keterangan_kondisi_pm )), 20) as nama_keterangan_kondisi_pm,
			substr(max(CONCAT(CAST(time_finish AS CHAR), nama_action_teknisi_pm )), 20) as nama_action_teknisi_pm

			FROM tb_maintenance 
			LEFT JOIN tb_main_schedule ON tb_maintenance.main_id = tb_main_schedule.main_id

			JOIN tb_status_job ON tb_status_job.versioning=tb_maintenance.main_status and tb_status_job.vendor_id=tb_maintenance.vendor_id 
			JOIN tb_service_point ON tb_service_point.id=tb_maintenance.sp_id 
			JOIN tb_jenis_job ON tb_jenis_job.id_job=tb_maintenance.main_id_job 
			JOIN tb_base_service_point ON tb_base_service_point.id_base=tb_service_point.base_kantor 
			LEFT JOIN tb_status_detail_pm_dev_for_juli_2024 a ON a.det_id = tb_main_schedule.status_detail 
			LEFT JOIN tb_kategori_status_detail_pm b ON b.idx = a.kategori_status_detail_pm 
			LEFT JOIN tb_status_edc_status_detail_pm c ON c.idx = a.status_edc_status_detail_pm 
			LEFT JOIN tb_status_merchant_status_detail_pm d ON d.idx = a.status_merchant_status_detail_pm 
			LEFT JOIN tb_keterangan_dan_action_status_pm e ON e.idx = a.id_keterangan_dan_action 
			LEFT JOIN tb_versi_aplikasi_dan_os_patch_konvensional f ON f.id_os_patch = tb_main_schedule.sched_edc_update_os_patch LEFT JOIN tb_sticker_bank g ON g.idx = tb_main_schedule.sched_edc_update_sticker_bank 
			WHERE tb_maintenance.vendor_id = '2' 
			AND (main_id_job = '6' or main_id_job = '20') 
			AND main_tgl_terima_jo BETWEEN DATE_SUB(CURDATE(), INTERVAL 3 MONTH) AND CURDATE()
			GROUP BY tb_maintenance.main_id`;
					const [rows] = await db.execute(query);
					return rows;
	}
}

module.exports = User;
