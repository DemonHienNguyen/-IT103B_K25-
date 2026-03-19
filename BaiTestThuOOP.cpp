#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class KhoaHoc{
	private:
		int id;
		string name;
		int tc;
		float cost;
	public:	
		// constructor
		KhoaHoc(){
			id = 0;
			name = "";
			tc = 0;
			cost = 0;
		}
		KhoaHoc(int id, string name, int tc, float cost){
			this->id = id;
			this->name = name;
			this->tc = tc;
			this->cost = cost;
		}
		// Setter
		void setId(int id){
			this->id = id;
		} 
		void setName(string name){
			this->name = name;
		} 
		void setTc(int tc){
			this->tc = tc;
		}
		void setCost (float cost){
			this->cost = cost;
		}
		// Getter
		int getId(){return id;}
		string getName(){return name;}
		int getTc(){return tc;}
		float getCost(){return cost;}
		
		void input(){
			cout << "Nhap Id: ";
			cin >> id;
			cin.ignore();
			cout << "Nhap ten khoa hoc: ";
			getline(cin, name);
			cout << "Nhap so tin chi: ";
			cin >> tc;
			cout << "Nhap so tien: ";
			cin >> cost;
		}
		void output(){
			cout << "ID: " << id
				 << " | Ten: " << name
				 << " | So Tin Chi: " << tc
				 << " | So Tien: " << cost  << "VND"<< endl;
		}
};
void addSubject(vector <KhoaHoc> &ds){
	KhoaHoc kh;
	kh.input();
	ds.push_back(kh);
}
void displayList(vector <KhoaHoc> ds){
	if(ds.size() == 0){
		cout << "Mang chua co phan tu nao ! vui long them phan tu truoc \n";
		return;
	}
	for(auto &kh : ds){
		kh.output();
	}
}
void update(vector <KhoaHoc> &ds){
	if(ds.size() == 0){
		cout << "Khong co phan tu de Cap nhap ! \n";
		return;
	}
	int idWannaToUp;
	cout << "Vui long nhap Id ma ban muon duoc sua: ";
	cin >> idWannaToUp;
	for(auto &kh : ds){
		if(kh.getId() == idWannaToUp){
			cout << "Nhap lai thong tin \n";
			kh.input();
			return;
		}
	}
	cout << "Khong tim thay \n";
}

void deleteSub(vector <KhoaHoc> &ds){
	if(ds.size() == 0){
		cout << "Khong co phan tu de xoa ! \n";
		return;
	}
	int idWannaToDel;
	cout << "Vui long nhap Id ma ban muon duoc xóa: ";
	cin >> idWannaToDel;
	for(int i = 0 ; i < ds.size(); i++){
		if(ds[i].getId() == idWannaToDel){
			ds.erase(ds.begin()+i);
			cout << "da xoa !";
			return;
		}
	}
	cout << "Khong tim thay \n";
}

void findByCost(vector <KhoaHoc> &ds){
	float x;
	cout << "Vui long nhap hoc phi de tim : ";
	cin >> x;
	cout << "====== Danh Sach Hoc Phi " << x << " ======" << endl;
	for(auto &kh : ds){
		if(kh.getCost() == x){
			kh.output();
		}
	}
}

bool compare(KhoaHoc a, KhoaHoc b){
	if(a.getCost() == b.getCost()){
		return a.getName() < b.getName();
	}
	return a.getCost() > b.getCost();
}

void sortSub(vector <KhoaHoc> &ds){
	sort(ds.begin(), ds.end(), compare);
	cout << "da Sap Xep !! \n";
}

int main (){
	
	vector<KhoaHoc> ds;
	
	int choice;
	
	do{
		cout << "\n===== MENU =====\n";
        cout << "1. Them khoa hoc\n";
        cout << "2. Hien thi\n";
        cout << "3. Cap nhat\n";
        cout << "4. Xoa\n";
        cout << "5. Tim theo hoc phi\n";
        cout << "6. Sap xep\n";
        cout << "0. Thoat\n";
        cout << "Chon: ";
        cin >> choice;

        switch (choice) {
            case 1:
            	addSubject(ds);
				break;
            case 2:
            	displayList(ds);
				break;
            case 3:
            	update(ds);
				break;
            case 4:
            	deleteSub(ds);
				break;
            case 5:
            	findByCost(ds);
				break;
            case 6:
            	sortSub(ds);
				break;
        }
	}while(choice != 0);
	
	return 0;
}
